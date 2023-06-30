import "../../index.css";
import types from "../../consts/AlertTypes";
import icons from "../../consts/AlertIcons";

const Alert = ({ title, message, type }) => {
  return (
    <div class={`border-l-8 rounded-lg p-4 ${types[type]}`} role="alert">
      <div class="flex">
        <div class="py-1">
          <img className="w-6 h-6" src={icons[type]} alt="icon" />
        </div>
        <div className="mx-3">
          <p class="font-semibold">{title}</p>
          <p class="text-sm">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default Alert;
