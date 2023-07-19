import axios from "axios";
import config from "../config";

const API_URL = config.apiURL;

export const axiosInstance = axios.create({
  baseURL: `${API_URL}/api`,
});