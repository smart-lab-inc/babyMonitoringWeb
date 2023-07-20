import "../../index.css";
import Colors from "../../consts/Colors";

const Button = ({ type, icon, primary, label, size, handleClick }) => {
  const mode = primary ? Colors.background.primary : Colors.background.secondary;
  const classes = [
    mode,
    size,
    "rounded text-center flex justify-center items-center text-white py-2 px-7",
  ].join(" ");
  return (
    <button className={classes} type={type} onClick={handleClick}>
      {icon && <img src={icon} alt={label} className="mr-2 h-5" />}
      {label}
    </button>
  );
};

export default Button;
