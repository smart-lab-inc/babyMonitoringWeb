import { axiosInstance } from "../axios";

export const list = async (userId) => {
  try {
    const respone = await axiosInstance.get(`/monitor/user/${userId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });

    return respone;
  } catch (error) {
    return error.response;
  }
};