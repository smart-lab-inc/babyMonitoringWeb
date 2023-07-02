import "../../index.css";
import BackgroundColors from "../../consts/BackgroundColors";

const Button = ({ icon, primary, label, size }) => {
  const mode = primary ? BackgroundColors.primary : BackgroundColors.secondary;
  const classes = [
    mode,
    size,
    "rounded text-center flex justify-center items-center text-white py-2 px-7",
  ].join(" ");
  return (
    <button className={classes}>
      {icon && <img src={icon} alt={label} className="mr-2 h-5" />}
      {label}
    </button>
  );
};

export default Button;
