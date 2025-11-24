import axios from "axios";
import { API_BASE_URL } from "@env";

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 15000,
});

// Login via GET com query params
export const loginUser = async (email: string, password: string) => {
  try {
    const response = await api.get("/api/v1/users/login", {
      params: { email, password },
    });
    return response.data;
  } catch (error: any) {
    if (error.response) throw new Error(error.response.data.message);
    else throw new Error("Erro ao fazer login");
  }
};

// Register via POST
export const registerUser = async (userData: {
  name: string;
  email: string;
  password: string;
}) => {
  try {
    const response = await api.post("/api/v1/users", userData);
    return response.data;
  } catch (error: any) {
    if (error.response) throw new Error(error.response.data.message);
    else throw new Error("Erro ao registrar usuário");
  }
};

export default api;
