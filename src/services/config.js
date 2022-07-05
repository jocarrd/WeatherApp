import axios from "axios";

const BASE_URL = "https://weather-app-jocarrd.vercel.app/";

const API = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    Accept: "application/json",
    "Access-Control-Allow-Headers": "Origin, POST,GET, X-Requested-With",
  },
});

export default API;
