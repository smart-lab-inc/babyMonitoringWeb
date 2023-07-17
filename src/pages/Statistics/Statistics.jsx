import StatisticsCard from "../../components/StatisticsCard/StatisticsCard";
import BarsChart from "../../components/Charts/BarChart";
import LinesChart from "../../components/Charts/LineChart";
import Button from "../../components/Button/Button";
import NavBar from "../../components/NavBar/NavBar";
import { Link } from "react-router-dom";
import routes from "../../consts/routes";
import { get } from "../../api/services/sensorData";
import { useEffect, useState } from "react";

const Statistics = () => {
  const now = new Date();
  const startTime = new Date(now.getTime() - 7 * 60 * 60 * 1000);
  const endTime = new Date(now.getTime() - 6 * 60 * 60 * 1000);

  const startTimestamp = startTime.toJSON().slice(0, -1);
  const endTimestamp = endTime.toJSON().slice(0, -1);

  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await get(
        "64ac22086c03245aaec1700a",
        "",
        "2023-07-17T04:12:01.658",
        "2023-07-17T05:12:01.658"
      );
      setData(response.data.data);
      console.log(response);
    }
    fetchData();
  }, []);

  return (
    <>
      <NavBar />
      <div className="text-center items-center justify-center h-screen p-4">
        <p className="text-3xl font-semibold m-5">Estadísticas</p>
        {data && (
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 justify-items-center pb-16">
            <StatisticsCard Chart={<BarsChart dataList={data.movement} />} title="MOVIMIENTO" />

            <StatisticsCard
              Chart={
                <LinesChart color={"#2D9CDB"} dataList={data.temperature} />
              }
              title="TEMPERATURA"
            />

            <StatisticsCard
              Chart={<LinesChart color={"#EB5757"} dataList={data.humidity} />}
              title="HUMEDAD"
            />

            <StatisticsCard
              Chart={<LinesChart color={"#F2994A"} dataList={data.sound}/>}
              title="AUDIO"
            />
          </div>
        )}
        <div className="fixed bottom-0 left-0 w-full p-4 flex justify-center">
          <Link to={routes.home}>
            <Button label="Salir" size="w-full sm:w-5/12" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Statistics;
