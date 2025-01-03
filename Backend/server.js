const express = require("express");
const cors = require("cors");
const app = express();
const connectDB = require("./config/db");
const UserRoutes = require("./routes/user.routes");
const User = require("./models/user.models");
const jwt = require("jsonwebtoken");

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the server");
});

app.use("/user", UserRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});
