import express from "express";
import Note from "../models/Note.js";

const router = express.Router();

// GET /api/notes - fetch all notes
router.get("/", async (req, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });
    res.json(notes);
  } catch (error) {
    console.error("❌ Notes route error:", error);
    res.status(500).json({ message: "Error fetching notes", error });
  }
});

// DELETE /api/notes/:id - remove a note (optional, useful for cleanup)
router.delete("/:id", async (req, res) => {
  try {
    await Note.findByIdAndDelete(req.params.id);
    res.json({ message: "Note deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
