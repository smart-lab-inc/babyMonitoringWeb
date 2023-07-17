import { axiosInstance } from "../axios";

export async function get(
	monitorId,
	sensorName,
	startTime,
	endTime,
) {
	const headers = {
		Authorization: `Bearer ${localStorage.getItem("accessToken")}`
	};

	try {
		const response = await axiosInstance.get(`/sensor-data/monitor/${monitorId}`, {
			params: {
				sensorName,
				startTime,
				endTime,
			},
		}, { headers });
		return response;
	} catch (error) {
		return error.response;
	}
}
