import api from "./axios";

export const loginUser = async (username, password) => {
  const response = await api.post("auth/login/", {
    username,
    password,
  });

  // Save tokens
  localStorage.setItem("access_token", response.data.access);
  localStorage.setItem("refresh_token", response.data.refresh);

  return response.data;
};
