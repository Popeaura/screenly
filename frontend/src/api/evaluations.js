// src/api/evaluations.js
import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000/api";

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const fetchEvaluations = async () => {
  try {
    const response = await api.get("/evaluations/");
    return response.data;
  } catch (error) {
    console.error("Error fetching evaluations:", error);
    throw error;
  }
};

export default api;
