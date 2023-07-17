import { axiosInstance } from "../axios";

export async function create(
	email,
	password,
	firstName,
	lastName,
	phoneNumber,
) {
	try {
		const response = await axiosInstance.post("/user", {
			email,
			password,
			firstName,
			lastName,
			phoneNumber,
		});
		return response;
	} catch (error) {
		return error.response;
	}
}

export const update = async (monitorSerialNumber) => {
  try {
    const response = await axiosInstance.put("/user/monitor", {
      monitorSerialNumber,
    }, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });

    return response;
  } catch (error) {
    return error.response;
  }
}
