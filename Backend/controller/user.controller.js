const User = require("../models/user.models");
const jwt = require("jsonwebtoken");

const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name)
    return res.status(400).json({ error: true, message: "Name is required" });
  if (!email)
    return res.status(400).json({ error: true, message: "Email is required" });
  if (!password)
    return res
      .status(400)
      .json({ error: true, message: "Password is required" });
  try {
    const isUserExist = await User.findOne({ email: email });
    if (isUserExist) {
      return res
        .status(400)
        .json({ error: true, message: "User already exist" });
    }

    const user = new User({
      name,
      email,
      password,
    });
    await user.save();
    const accessToken = jwt.sign({ user }, process.env.ACCESS_SECRET_TOKEN, {
      expiresIn: "1d",
    });
    return res.status(200).json({
      error: false,
      user,
      message: "User created successfully",
      accessToken,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ error: true, message: "Internal Server Error" });
  }
};

const handleLogin = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide email and password" });
  }
  const userInfo = await User.findOne({ email: email });
  if (!userInfo) {
    return res.status(401).json({ success: false, message: "User not found" });
  }

  if (userInfo.email == email && userInfo.password == password) {
    const user = { user: userInfo };
    const accessToken = jwt.sign({ user }, process.env.ACCESS_SECRET_TOKEN, {
      expiresIn: "1d",
    });
    return res.status(200).json({
      success: true,
      message: "User logged in successfully",
      accessToken,
    });
  } else {
    return res
      .status(401)
      .json({ success: false, message: "Invalid credentials" });
  }
};

module.exports = { createUser, handleLogin };
