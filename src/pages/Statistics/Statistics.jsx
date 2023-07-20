import React, { useEffect, useState } from "react";
import StatisticsCard from "../../components/StatisticsCard/StatisticsCard";
import Chart from "../../components/Charts/Chart";
import useAuth from "../../hooks/useAuth";
import Spinner from "../../components/Spinner/Spinner";
import Dropdown from "../../components/Dropdown/Dropdown";
import NavBar from "../../components/NavBar/NavBar";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import routes from "../../consts/routes";
import { get } from "../../api/services/sensorData";
import ChartTitles from "../../consts/ChartTitles";
import { getStartAndEndHour } from "../../utils/date";
import { useNavigate, generatePath } from "react-router-dom";

const Statistics = () => {
  const { authState } = useAuth();
  const [selectedMonitor, setSelectedMonitor] = useState("");
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedType, setSelectedType] = useState("bar");
  const [chartData, setChartData] = useState({});

  const navigate = useNavigate();

  const monitorIds = authState.user.monitorIds || [];

  const { startTimeStamp, endTimeStamp } = getStartAndEndHour();

  const chartTypes = {
    Barras: "bar",
    Linea: "line",
  };
  const types = ["Barras", "Linea"];

  useEffect(() => {
    setSelectedMonitor(selectedMonitor || monitorIds[0]);
  }, [monitorIds, selectedMonitor]);

  useEffect(() => {
    if (selectedMonitor) {
      setIsLoading(true);
      fetchData();
    }
  }, [selectedMonitor, selectedType]);

  useEffect(() => {
    if (data) {
      setChartData(data);
      setIsLoading(false);
    }
  }, [data]);

  const fetchData = async () => {
    const response = await get(
      selectedMonitor,
      "",
      "2023-07-17T04:12:01.658",
      "2023-07-17T05:12:01.658"
    );
    console.log(response);

    setData(response.data.data);
  };

  return (
    <>
      <NavBar />
      <div className="text-center items-center justify-center h-screen p-4">
        <p className="text-3xl font-semibold m-5">Estadísticas</p>
        {monitorIds?.length > 0 ? (
          <div className="flex justify-between">
            <Dropdown
              text="Seleccionar grafica"
              data={types}
              setSelected={setSelectedType}
              itemName={"Tipo"}
            />
            <Dropdown
              text="Seleccionar monitor"
              data={monitorIds}
              setSelected={setSelectedMonitor}
              itemName={"Monitor"}
            />
          </div>
        ) : (
          <div className="flex justify-center">
            <p className="text-xl font-semibold m-5">No hay monitores</p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 justify-items-center pb-16">
          {isLoading ? (
            <div className="col-span-3 flex justify-center items-center">
              <Spinner />
            </div>
          ) : chartData &&
            Object.keys(chartData).length > 0 &&
            Object.values(chartData).every(
              (dataList) => dataList.length === 0
            ) ? (
            <div className="col-span-3 flex justify-center items-center">
              <p className="text-xl font-semibold m-5">No hay datos</p>
            </div>
          ) : isLoading ? (
            <Spinner />
          ) : (
            Object.entries(chartData).map(([chartType, dataList], index) => {
              if (dataList.length > 0) {
                return (
                  <StatisticsCard
                    key={index}
                    Chart={
                      <Chart
                        type={chartTypes[selectedType]}
                        dataList={dataList}
                        color={"#3056D3"}
                      />
                    }
                    onClick={() => {navigate(generatePath(routes.statisticsDetail, {id: selectedMonitor}))}}
                    title={ChartTitles[chartType]}
                  />
                );
              }
              return null;
            })
          )}
        </div>

        <div className="fixed bottom-0 left-0 w-full p-4 flex justify-center">
          <Link to={routes.home} className="w-full sm:w-5/12">
            <Button label="Salir" size="w-full" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Statistics;
