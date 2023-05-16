import axios from "axios";
import { urlBase } from "../utils/nucbaZappiBackendApi";

export const createUser = async (nombre, email, password) => {
  try {
    const response = await axios.post(`${urlBase}/auth/register`, {
      nombre,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${urlBase}/auth/login`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
