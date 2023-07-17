import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const BarsChart = ({ dataList }) => {
  console.log(dataList);
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Sales",
        data: [456, 479, 324, 569, 702, 600],
        backgroundColor: "#2D9CDB",
      },
      {
        label: "Expenses",
        data: [364, 504, 605, 400, 345, 320],
        backgroundColor: "#EB5757",
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
        text: "Bar Chart",
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default BarsChart;
