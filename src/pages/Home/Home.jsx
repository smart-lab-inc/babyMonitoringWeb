import MonitorCard from "../../components/MonitorCard/MonitorCard";
import Navbar from "../../components/NavBar/NavBar";
import useAuth from "../../hooks/useAuth";
import StarsSVG from "../../assets/svg/stars.svg";

const Home = () => {
  const { authState } = useAuth();

  const monitorIds = authState.user.monitorIds || [];
  const userFullName = authState.user.fullName || "";
  let monitorIndex = 0;

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
        {monitorIds?.length > 0 ? (
          <div className="flex justify-center">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 w-3/4 mb-10">
              {monitorIds.map((monitorId) => {
                monitorIndex++;
                return (
                  <MonitorCard
                    monitorId={monitorId}
                    key={monitorId}
                    monitorIndex={monitorIndex}
                  />
                );
              })}
            </div>
          </div>
        ) : (
          <div className="flex justify-center">
            <p className="text-xl font-semibold m-5">No hay monitores</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
