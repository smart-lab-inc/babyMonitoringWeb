import MonitorCard from "../../components/MonitorCard/MonitorCard";
import Navbar from "../../components/NavBar/NavBar";
import useAuth from "../../hooks/useAuth";
import StarsSVG from "../../assets/svg/stars.svg";
import { list } from "../../api/services/monitor";
import { useEffect, useState } from "react";
import Spinner from "../../components/Spinner/Spinner";

const Home = () => {
  const { authState } = useAuth();
  const userId = authState.user.id;

  const [monitorsData, setMonitorsData] = useState([]);

  const userFullName = authState.user.fullName || "";

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await list(userId);

    if (response.status === 200) {
      setMonitorsData(response.data.data);
      return;
    }

  };

  const renderMonitorList = () => (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 w-3/4 mb-10">
        {monitorsData.map((monitor, key) => (
          <MonitorCard monitorId={monitor.id} key={monitor.id} monitorIndex={++key} />
        ))}
      </div>
    </div>
  );

  return (
    <div className="font-primary">
      <Navbar />

      <div className="flex flex-col items-center pb-5">
        <img src={StarsSVG} alt="welcome" className="w-1/3 sm:w-1/5" />
        <p className="text-3xl text-center font-semibold m-5">
          Hola de nuevo, {userFullName}
        </p>
      </div>
      <div className="text-center items-center justify-center h-screen p-4">
        <p className="text-2xl font-semibold m-5">Monitores</p>


        {monitorsData.length > 0 ?
          renderMonitorList()
          : (
            <div className="col-span-3 flex justify-center items-center">
              <Spinner />
            </div>
          )}
      </div>
    </div>
  );
};

export default Home;
