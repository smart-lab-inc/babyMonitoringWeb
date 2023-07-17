import StatisticsCard from "../../components/StatisticsCard/StatisticsCard";
import BarsChart from "../../components/Charts/BarChart";
import LinesChart from "../../components/Charts/LineChart";
import Button from "../../components/Button/Button";
import NavBar from "../../components/NavBar/NavBar";
import { Link } from "react-router-dom";
import routes from "../../consts/routes";

const Statistics = () => {
  return (
    <>
      <NavBar />
      <div className="text-center items-center justify-center h-screen p-4">
        <p className="text-3xl font-semibold m-5">Estadísticas</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 justify-items-center pb-16">
          <StatisticsCard Chart={<BarsChart />} title="MOVIMIENTO" />

          <StatisticsCard
            Chart={<LinesChart color={"#2D9CDB"} />}
            title="TEMPERATURA"
          />

          <StatisticsCard
            Chart={<LinesChart color={"#EB5757"} />}
            title="HUMEDAD"
          />

          <StatisticsCard
            Chart={<LinesChart color={"#F2994A"} />}
            title="AUDIO"
          />
        </div>
        <div className="fixed bottom-0 left-0 w-full p-4">
          <Link to={routes.home}>
            <Button label="Salir" size="w-full" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Statistics;
