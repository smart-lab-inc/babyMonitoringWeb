import "../../index.css"
import types from "../../consts/AlertTypes";
import icons from "../../consts/AlertIcons";

const Snackbar = ({ message, type }) => {
  return (
    <div class={`rounded-lg p-4 ${types[type]}`} role="alert">
      <div class="flex items-center">
        <div class="py-1">
          <img className="w-6 h-6 rounded-full" src={icons[type]} alt="icon" />
        </div>
        <div className="mx-3">
          <p class="font-semibold">Your item has been added successfully</p>
        </div>
      </div>
    </div>
  );
};

export default Snackbar;