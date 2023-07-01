import "../../index.css";

const Button = ({ icon, primary, label, size }) => {
  const mode = primary ? "bg-blue-600" : "bg-slate-800";
  return (
    <button
      className={[
        mode,
        size,
        "rounded text-center flex justify-center items-center text-white py-2 px-7",
      ].join(" ")}
    >
      {icon ? <img src={icon} alt={label} className="mr-2 h-5" /> : null}
      {label}
    </button>
  );
};

export default Button;
