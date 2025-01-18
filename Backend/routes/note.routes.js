const express = require("express");
const { createNote, EditNote, getAllNotes, DeleteNote } = require("../controller/notes.controller");
const router = express.Router();
const authenticateToken = require("../utilies");

router.post("/create-note", authenticateToken, createNote);

router.put("/update-note/:id", authenticateToken, EditNote);

router.get("/getAllNotes", authenticateToken, getAllNotes);
router.delete("/delete-note/:noteId", authenticateToken, DeleteNote )
   
 



module.exports = router;
