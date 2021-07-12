import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:3003/";

export const getTasks = () => {
  return axios.get(API_URL + "tasks", { headers: authHeader() });
};