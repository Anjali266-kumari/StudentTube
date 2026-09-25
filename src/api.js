import axios from "axios";

const API = axios.create({
  baseURL: "https://studenttube.onrender.com/api",
});

export const getChannels = async (subject, semester) => {
  const params = new URLSearchParams();

  if (subject) params.append("subject", subject);
  if (semester) params.append("semester", semester);

  return API.get(`/channels?${params.toString()}`);
};
