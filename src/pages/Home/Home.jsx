import NavBar from "../../components/NavBar/NavBar";
import babySVG from "../../assets/svg/baby.svg";
import Alert from "../../components/Alert/Alert";
import Button from "../../components/Button/Button";
import eyeSVG from "../../assets/svg/eye.svg";
import chartSVG from "../../assets/svg/bar-chart.svg";

const Home = () => {
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
              <p className="text-5xl font-bold">25 °C</p>
              <p className="text-2xl font-semibold m-5">Temperatura</p>
            </div>
          </div>
          <div className="w-1/2 h-full grid justify-items-center items-center">
            <div className="flex justify-center items-center flex-col">
              <p className="text-5xl font-bold">25 °C</p>
              <p className="text-2xl font-semibold m-5">Temperatura</p>
            </div>
          </div>
        </div>
        <Alert
          title="No hay actualizaciones"
          message="Todo parece estar en orden"
          type="success"
        />

        <div className="py-4 flex flex-col gap-4">
          <Button primary icon={eyeSVG} label="Observar" size="w-full" />
          <Button
            primary
            icon={chartSVG}
            label="Ver estadísticas"
            size="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
