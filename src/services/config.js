import axios from "axios";

const API = axios.create({
  baseURL: window.location.origin,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    Accept: "application/json",
    "Access-Control-Allow-Headers": "Origin, POST,GET, X-Requested-With",
  },
});

export default API;
