import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Navbar from "../../components/NavBar/NavBar";

const videoMonitor = () => {
  const navigate = useNavigate();

  return (
    <div className="h-max">
      <Navbar />
      <div className="flex flex-col items-center h-screen p-6">
        <p className="text-3xl font-semibold py-4">Monitoreo</p>

        <div className="w-full h-2/3 rounded-lg h-64 bg-gray-300 mb-4">
          <iframe
            src="http://streaming.smartlab.systems/"
            title="Video Monitor"
            className="w-full h-full"
            allowFullScreen
            style={{ border: "0px" }}
          />
        </div>

        <div className="flex flex-row justify-between gap-2 w-full">
          <Button label="Salir" size="w-1/2" handleClick={() => navigate(-1)} />
          <Button primary label="Silenciar" size="w-1/2" />
        </div>
      </div>
    </div>
  );
};

export default videoMonitor;
