import axios from "axios";

export const api = axios.create({
  baseURL: "/api/v0",
});

export const apiAuth = axios.create({
  baseURL: "/api/auth",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
