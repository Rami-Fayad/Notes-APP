const express = require("express");
const cors = require("cors");
const app = express();
const connectDB = require("./config/db");
const UserRoutes = require("./routes/user.routes");
const User = require("./models/user.models");
const jwt = require("jsonwebtoken");
const Note = require("./models/note.model");
const authenticateToken = require("./utilies");

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

app.post("/create-note", authenticateToken, async (req, res) => {
  const { title, content, tags } = req.body;
  const userId = req.user._id;
  if (!title)
    return res.status(400).json({ error: true, message: "Title is required" });
  if (!content)
    return res
      .status(400)
      .json({ error: true, message: "Content is required" });

  try {
    const note = new Note({
      title,
      content,
      tags: tags || [],
      userId // Check if user._id exists
    });
    console.log("Note to save:", note); // Debug log before saving
    await note.save();
    
    return res.status(200).json({
      error: false,
      note,
      message: "Note created successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: true, message: "Internal Server Error" });
  }
});
app.get('/test-auth', authenticateToken, (req, res) => {
  res.json({ message: "Token is valid", user: req.user });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});
