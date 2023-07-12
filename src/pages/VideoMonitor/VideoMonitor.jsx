import Button from "../../components/Button/Button";

const videoMonitor = () => {
  return (
    // center x and y
    <div className="flex font-primary flex-col items-center justify-center h-screen p-4">
      <p className="z-40 text-3xl font-semibold">Monitoreo</p>

      <div className="w-full rounded-lg h-64 bg-gray-300 mt-10 mb-4">

      </div>
      
      <div className="flex flex-row justify-between gap-2  w-full">
        <Button label="Salir" size="w-1/2" />
        <Button primary label="Silenciar" size="w-1/2" />
        </div>
    </div>      
  );
};

export default videoMonitor;
