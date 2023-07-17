import { axiosInstance } from "../axios";

export async function get(
	monitorId,
	sensorName,
	startTime,
	endTime,
) {
	try {
		const response = await axiosInstance.get(`/sensor-data/monitor/${monitorId}`, {
			params: {
				sensorName,
				startTime,
				endTime,
			},
			headers: {
				"Authorization": `Bearer ${localStorage.getItem("accessToken")}`,
			},
		});
		return response;
	} catch (error) {
		return error.response;
	}
}
