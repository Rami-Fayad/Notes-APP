import axios from "axios";

const API_BASE_URL = "http://localhost:5000"; // Replace with your backend URL

// Create an Axios instance
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000, // Set a reasonable timeout
});

// Add request interceptor
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // Retrieve the token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Add response interceptor
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized errors
      console.warn("Session expired. Redirecting to login.");
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

// API functions
export const login = async (email, password) =>
  apiClient.post("/user/login", { email, password });

