import axios from "axios";
import { API_BASE_URL } from "@env";

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 15000,
});

export const getWorks = async () => {
  const response = await api.get("/api/v1/works");
  return response.data;
};

export const createWork = async (workData: {
  title: string;
  description: string;
}) => {
  const response = await api.post("/api/v1/works", workData);
  return response.data;
};

export const updateWork = async (id: string, workData: any) => {
  const response = await api.put(`/api/v1/works/${id}`, workData);
  return response.data;
};

export const deleteWork = async (id: string) => {
  const response = await api.delete(`/api/v1/works/${id}`);
  return response.data;
};

export default api;
