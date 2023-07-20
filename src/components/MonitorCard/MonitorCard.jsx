import { Link, generatePath } from "react-router-dom";
import Button from "../Button/Button";
import BabySVG from "../../assets/svg/baby.svg";
import routes from "../../consts/routes";

const MonitorCard = ({ monitorId, monitorIndex }) => {
  return (
    <div className="w-full max-w-sm pt-10 bg-white border border-gray-200 transition-all delay-100 hover:border-blue-500 rounded-lg shadow">
      <div className="flex flex-col items-center pb-10">
        <img
          className="w-24 h-24 mb-3 rounded-full shadow-lg"
          src={BabySVG}
          alt="Baby image"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900">
          Monitor # {monitorIndex}
        </h5>
        <div className="flex mt-4 space-x-3 md:mt-6">
          <Link to={generatePath(routes.monitorDashboard, { id: monitorId })}>
            <Button
              type="button"
              primary={true}
              label="Acceder"
              size="w-full"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MonitorCard;
