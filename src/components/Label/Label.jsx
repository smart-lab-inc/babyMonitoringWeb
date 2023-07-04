import PropTypes from "prop-types";

const Label = ({ value, id }) => {
  return (
    <label className="text-sm text-medium text-stone-950" htmlFor={id} id={id}>{value}</label>
  );
};

Label.propTypes = {
  value: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

Label.defaultProps = {
  value: "Label",
  id: "label",
};

export default Label;
