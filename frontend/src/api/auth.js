import axios from "axios";

export const login = async (email, password) => {
  const response = await axios.post(
    "http://127.0.0.1:8000/api/token/",
    { email, password }
  );

  localStorage.setItem("accessToken", response.data.access);
  localStorage.setItem("refreshToken", response.data.refresh);

  return response.data;
};
