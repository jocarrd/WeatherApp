import axios from "axios";

const BASE_URL = "https://localhost:3000";

const API = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
});

export default API;
