import express from "express";
import multer from "multer";
import Note from "../models/Note.js";

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + "-" + file.originalname;
    cb(null, uniqueName);
  },
});

// only allow pdfs
const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype === "application/pdf") {
      cb(null, true);
    } else {
      cb(new Error("Only pdf files are allowed"), false);
    }
  },
});

// POST /api/upload - upload a pdf and save note metadata
router.post("/", upload.single("pdf"), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No files received" });
  }

  try {
    const { title, subject, description, pages } = req.body;

    const note = await Note.create({
      title: title || req.file.originalname,
      subject: subject?.trim() || "Uncategorized",
      description: description || "",
      pages: pages || "",
      pdfUrl: `/uploads/${req.file.filename}`,
      filename: req.file.filename,
    });

    res.json({
      message: "PDF uploaded successfully",
      note,
    });
  } catch (error) {
    console.error("❌ Upload route error:", error);
    res.status(500).json({ message: "Error saving note to database", error });
  }
});

// GET /api/upload - list all uploaded files (kept from your original, still useful for debugging)
router.get("/", (req, res) => {
  import("fs").then((fs) => {
    fs.readdir("uploads/", (err, files) => {
      if (err)
        return res
          .status(500)
          .json({ message: "could not read uploads folder" });
      const pdfs = files.filter((f) => f.endsWith(".pdf"));
      res.json({ files: pdfs });
    });
  });
});

router.delete("/:id", async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);

    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }

    const fs = await import("fs");
    const filePath = `uploads/${note.filename}`;
    fs.unlink(filePath, (err) => {
      if (err) console.error("Could not delete file:", err);
    });

    await Note.findByIdAndDelete(req.params.id);

    res.json({ message: "Note Deleted Successfully" });
  } catch (error) {
    console.error("Delete Route error:", error);
    res.status(500).json({ message: "Error deleting note", error });
  }
});

export default router;
