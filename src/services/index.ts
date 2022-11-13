import axios from "axios";

const api = axios.create({
  baseURL: "https://movies-collection-test.herokuapp.com",
  timeout: 15000,
});

export default api;
