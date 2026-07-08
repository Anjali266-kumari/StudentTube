import express from "express";
import Channel from "../models/Channel.js";
import { expandSynonyms } from "../synonyms.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { subject, semester } = req.query;
    let query = {};

    if (subject) {
      // Expand the search term into related synonyms (e.g. "mathematics" -> ["mathematics", "maths", "math"])
      const terms = expandSynonyms(subject);

      // Match if subject field contains ANY of these terms (case-insensitive)
      query.subject = {
        $regex: terms.join("|"), // turns into a regex like: maths|math|mathematics
        $options: "i",
      };
    }

    if (semester) {
      query.semester = semester; // exact match, e.g. "1", "2"
    }

    const channels = await Channel.find(query);
    res.json(channels);
  } catch (error) {
    console.error("❌ Channels route error:", error);
    res.status(500).json({ message: "Server Error", error });
  }
});

//Add channel
router.post("/", async (req, res) => {
  try {
    const channel = await Channel.create(req.body);
    res.json(channel);
  } catch (error) {
    res.status(500).json({ message: "Error creating channel", error });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Channel.findByIdAndDelete(req.params.id);
    res.json({ message: "Channel Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
