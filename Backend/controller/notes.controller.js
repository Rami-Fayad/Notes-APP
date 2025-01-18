const Note = require("../models/note.model");

const createNote = async (req, res) => {
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
      userId, // Check if user._id exists
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
};

const EditNote = async (req, res) => {
  const { id } = req.params;
  const { title, content, tags, isPinned } = req.body;
  if (!title && !content && !tags) {
    return res
      .status(400)
      .json({ error: true, message: "At least on update is required" });
  }
  try {
    const note = await Note.findById({ _id: id, userId: req.user._id });
    if (!note) {
      return res.status(404).json({ error: true, message: "Note not found" });
    }
    if (title) note.title = title;
    if (content) note.content = content;
    if (tags) note.tags = tags;
    if (isPinned) note.isPinned = isPinned;
    await note.save();
    return res.json({
      error: false,
      note,
      message: "Note updated successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: true, message: "Internal Server Error" });
  }
};
const getAllNotes = async (req, res) => {
  const userId = req.user._id;
  try {
    const notes = await Note.find({ userId }).sort({ isPinned: -1 });
    return res.json({ error: false, notes });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: true, message: "Internal Server Error" });
  }
};
const DeleteNote = async (req, res) => {
  const { noteId } = req.params;
  const userId = req.user._id;
   try {
     const note = await Note.findOneAndDelete({ _id: noteId, userId: userId });
     if (!note) {
       return res.status(404).json({ error: true, message: "Note not found" });
     }
     return res.json({ error: false, message: "Note deleted successfully" });
   } catch (error) {
     console.error(error);
     res.status(500).json({ error: true, message: "Internal Server Error" });
   }
}
module.exports = { createNote, EditNote, getAllNotes, DeleteNote };
