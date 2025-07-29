
import axios from "axios";

const api = axios.create({
  baseURL:`${process.env.NEXT_PUBLIC_BACKEND_HOST_NAME}`,
});

api.interceptors.request.use((config) => {
  const token = sessionStorage.getItem("jwt");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
