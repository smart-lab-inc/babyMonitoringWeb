import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL + "/api" : "http://localhost:8080/api";

export const axiosInstance = axios.create({
  baseURL: API_URL,
});