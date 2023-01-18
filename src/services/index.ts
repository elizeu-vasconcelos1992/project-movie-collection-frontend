import axios from "axios";

const api = axios.create({
  baseURL: "https://project-movie-collection-backend-production.up.railway.app",
  timeout: 15000,
});

export default api;
