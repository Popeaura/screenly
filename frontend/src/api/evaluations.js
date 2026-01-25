import api from "./axios";

export async function fetchEvaluations() {
  const response = await api.get("/api/evaluations/");
  return response.data;
}
