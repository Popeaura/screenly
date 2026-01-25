// src/api/evaluations.js
import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000/api";

const api = axios.create({
  baseURL: API_BASE_URL,
});

// Add token to every request
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const fetchEvaluations = async () => {
  try {
    const response = await api.get("/evaluations/");
    return response.data;
  } catch (error) {
    console.error("Error fetching evaluations:", error);
    throw error;
  }
};

export const createEvaluation = async (data) => {
  try {
    const response = await api.post("/evaluations/", data);
    return response.data;
  } catch (error) {
    console.error("Error creating evaluation:", error);
    throw error;
  }
};

export const updateEvaluation = async (id, data) => {
  try {
    const response = await api.put(`/evaluations/${id}/`, data);
    return response.data;
  } catch (error) {
    console.error("Error updating evaluation:", error);
    throw error;
  }
};

export const deleteEvaluation = async (id) => {
  try {
    await api.delete(`/evaluations/${id}/`);
  } catch (error) {
    console.error("Error deleting evaluation:", error);
    throw error;
  }
};

export const fetchEvaluationStats = async () => {
  try {
    const response = await api.get("/evaluations/stats/");
    return response.data;
  } catch (error) {
    console.error("Error fetching evaluation stats:", error);
    throw error;
  }
};


export default api;
