import axios from "axios";
import { GECKO_BASE_URL } from ".";

const GeckoClient = axios.create({
  baseURL: GECKO_BASE_URL,
  timeout: 5000,
})

GeckoClient.interceptors.request.use((config) => {
  config.headers = config.headers ?? {};
  config.headers["Accept"] = "application/json";
  return config;
})

GeckoClient.interceptors.response.use(response => response, (err) => {
  console.log("Axios Error:", err.response?.data || err.message);
  return Promise.reject(err);
})

export default GeckoClient;