import NavBar from "../../components/NavBar/NavBar";
import babySVG from "../../assets/svg/baby.svg";
import Button from "../../components/Button/Button";
import eyeSVG from "../../assets/svg/eye.svg";
import chartSVG from "../../assets/svg/bar-chart.svg";
import { Link, useParams } from "react-router-dom";
import routes from "../../consts/routes";
import { useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import config from "../../config";
import AuthContext from "../../context/AuthContext/AuthContext";

const MonitorDashboard = () => {
  const { id } = useParams();
  const [socket,] = useState(io(`${config.websocketURL}/monitoring?token=${localStorage.getItem("accessToken")}&monitorId=${id}`));
  const [temperature, setTemperature] = useState("--");
  const [humidity, setHumidity] = useState("--");
  const { logout } = useContext(AuthContext);

  useEffect(() => {

    socket.on("error", handleErrorSocket);

    socket.on("newSensorData", handleNewSensorData);

    return () => {
      socket.off("newSensorData");
      socket.off("error");
    }
  }, [socket, temperature, humidity]);

  const handleErrorSocket = () => {
    logout();
  };

  const handleNewSensorData = (data) => {
    data.data.map((item) => {
      if (item.name === "temperature") {
        setTemperature(item.value);
      } else if (item.name === "humidity") {
        setHumidity(item.value);
      }
    })
  };

  return (
    <div className="font-primary">
      <NavBar />
      <div className="relative items-center justify-center overflow-hidden mb-10">
        <div className="absolute inset-0 bg-primary transform scale-x-150 rounded-[50%_50%_50%_50%/_0_0_50%_50%]"></div>
        <img
          src={babySVG}
          alt="baby"
          className="w-1/2 xl:w-1/6 md:w-1/3 mx-auto py-16 relative z-10"
        />
      </div>
      <div className="p-4">
        <div className="h-36 flex font-primary pb-4">
          <div className="w-1/2 h-full grid justify-items-center items-center border-r-2 border-r-black ">
            <div className="flex justify-center items-center flex-col">
              <p className="text-5xl font-bold">{temperature} °C</p>
              <p className="text-2xl font-semibold my-5">Temperatura</p>
            </div>
          </div>
          <div className="w-1/2 h-full grid justify-items-center items-center">
            <div className="flex justify-center items-center flex-col">
              <p className="text-5xl font-bold">{humidity} %</p>
              <p className="text-2xl font-semibold my-5">Humidity</p>
            </div>
          </div>
        </div>
        <div className="py-4 flex flex-col gap-4">
          <Link to={routes.watchMonitor}>
            <Button primary icon={eyeSVG} label="Observar" size="w-full" />
          </Link>
          <Link to={routes.statistics}>
            <Button
              primary
              icon={chartSVG}
              label="Ver estadísticas"
              size="w-full"
            />
          </Link>
        </div>
      </div >
    </div >
  );
};

export default MonitorDashboard;
