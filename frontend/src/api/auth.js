import api from "./axios";

export async function login(username, password) {
  const response = await api.post("/api/token/", {
    username,
    password,
  });
  const { access, refresh } = response.data;

  localStorage.setItem("access", access);
  localStorage.setItem("refresh", refresh);
}
