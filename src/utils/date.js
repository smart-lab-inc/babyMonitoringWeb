export const getHour = (date) => {
  const newDate = new Date(date);

  const hour = newDate.getHours();
  const minutes = newDate.getMinutes();
  return `${hour}:${minutes}`;
};

export const getStartAndEndHour = () => {
  const now = new Date();
  const startTimeStamp = new Date(now.getTime() - 1 * 60 * 60 * 1000)
    .toJSON()
    .slice(0, -1);

  const endTimeStamp = now.toJSON().slice(0, -1);

  return { startTimeStamp, endTimeStamp };
};