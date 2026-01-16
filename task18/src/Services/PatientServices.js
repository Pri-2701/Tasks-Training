import api from "../Api/axios";

export const getPatients = async () => {
  const response = await api.get("/users"); 
  return response.data;
};