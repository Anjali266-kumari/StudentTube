import express from "express";
import Channel from "../models/Channel.js";
import { expandSynonyms } from "../synonyms.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { subject, semester } = req.query;
    let query = {};

    if (subject) {
      const terms = expandSynonyms(subject);

      query.subject = {
        $regex: terms.join("|"),
        $options: "i",
      };
    }

    if (semester) {
      query.semester = semester;
    }

    const channels = await Channel.find(query);
    res.json(channels);
  } catch (error) {
    console.error("❌ Channels route error:", error);
    res.status(500).json({ message: "Server Error", error });
  }
});

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
