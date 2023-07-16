import { axiosInstance } from "../axios";

export const login = async (email, password) => {
  try {
    const response = await axiosInstance.post("/auth/token", {
      email,
      password,
    });

    return response;
  } catch (error) {
    return error.response;
  }
}
