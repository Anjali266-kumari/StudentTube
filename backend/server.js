import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import channelRoutes from "./routes/channelRoutes.js";
import uploadsRoutes from "./routes/uploadRoutes.js";
import notesRoutes from "./routes/notesRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.use("/api/upload", uploadsRoutes);
app.use("/api/notes", notesRoutes);
app.use("/api/channels", channelRoutes);

const PORT = process.env.PORT || 5000;

console.log("MONGO_URI =", process.env.MONGO_URI);
console.log("URI:", process.env.MONGO_URI);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Error:", err.message));

app.get("/", (req, res) => {
  res.send("StudentTube Backend Running");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
