import api from "./axios";

export async function fetchEvaluations() {
  const response = await api.get("/api/evaluations/");
  return response.data; // adjust if your DRF view wraps it differently
}
