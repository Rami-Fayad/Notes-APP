import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import InputPassword from "../../components/Input/InputPassword";
import { validateEmail } from "../../utils/validate";
import { login } from "../../services/apiService";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState(null);
  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      seterror("Please Enter a valid email address");
      return;
    }
    if (!password) {
      seterror("Please Enter a Password");
      return;
    }
    seterror("");

    // Login API Call
    try {
      const response = await login(email, password);
      if (response.status === 200) {
        localStorage.setItem("token", response.data.accessToken);
        window.location.href = "/dashboard";
      } else {
        seterror(response.data.message);
      }
    } catch (error){
      console.error("Error during login:", error);
      seterror("Something went wrong. Please try again later.");
 
    }
  };
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center mt-28">
        <div className="w-96 border rounded bg-white py-10 px-7">
          <form onSubmit={handleLogin}>
            <h4 className="text-2xl mb-7">Login</h4>
            <input
              type="text"
              placeholder="Enter your Email"
              className="input-box"
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
            <InputPassword
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
            {error && <p className="text-red-500 text-xs pb-1">{error}</p>}
            <button type="submit" className="btn-primary">
              Login
            </button>
            <p className="text-sm text-center mt-4">
              Not registered yet? {""}
              <Link
                to={"/signup"}
                className="font-medium text-primary underline"
              >
                Create an account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
