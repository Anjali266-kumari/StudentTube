import mongoose from "mongoose";

const channelSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: true,
  },
  semester: String,
  name: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
  },
  subscribers: {
    type: String,
  },
  url: {
    type: String,
  },
  description: {
    type: String,
  },
});

const URL = mongoose.model("Channel", channelSchema);

export default URL;
