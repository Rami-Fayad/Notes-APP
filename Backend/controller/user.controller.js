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
    const accessToken = jwt.sign(
      {id: user._id},
      process.env.ACCESS_SECRET_TOKEN,
      { expiresIn: "1d" }
    );
    return res
      .status(200)
      .json({
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

module.exports = { createUser };
