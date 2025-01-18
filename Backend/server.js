const express = require("express");
const cors = require("cors");
const app = express();
const connectDB = require("./config/db");
const UserRoutes = require("./routes/user.routes");
const NotesRoutes= require("./routes/note.routes")
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
app.use("/note",NotesRoutes)


// app.get("/test-auth", authenticateToken, (req, res) => {
//   res.json({ message: "Token is valid", user: req.user });
// });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});
