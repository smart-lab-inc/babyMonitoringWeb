import { Bar } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { getHour } from "../../utils/date";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const Chart = ({ color, dataList, type }) => {
  const labels = [];
  const values = [];

  dataList.map((item) => {
    labels.push(getHour(item.timestamp));
    values.push(item.value);
  });

  const types = {
    bar: "Grafica de barras",
    line: "Grafica de lineas",
  };

  const data = {
    labels: labels,
    datasets: [
      {
        label: dataList[0].name,
        data: values,
        backgroundColor: color,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: types[type],
      },
    },
  };

  return (
    <>
      {type === "bar" ? (
        <Bar data={data} options={options} />
      ) : (
        <Line data={data} options={options} />
      )}
    </>
  );
};

export default Chart;
