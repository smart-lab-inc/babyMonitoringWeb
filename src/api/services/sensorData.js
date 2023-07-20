import { axiosInstance } from "../axios";

export const get = async (
	monitorId,
	sensorName,
	startTime,
	endTime,
) => {
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

export const getStatistics = async (
	monitorId,
	startTime,
	endTime
) => {
	try {
		const response = await axiosInstance.get(`/sensor-data/statistics/monitor/${monitorId}`, {
			params: {
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