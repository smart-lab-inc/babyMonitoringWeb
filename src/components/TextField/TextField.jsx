import PropTypes from "prop-types";

const TextField = ({ type, name, value, placeholder, disabled, error, errorText, multiline, rows, width }) => {
  const commonClassNames = `block rounded-md border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${error ? "ring-red-600" : "ring-gray-300"
    } outline-none placeholder:text-gray-500 focus:ring-1 focus:ring-inset ${error ? "focus:ring-red-600" : "focus:ring-blue-700"
    } sm:text-sm sm:leading-6 ${disabled && "bg-slate-100"}`;

  const inputClassNames = `${commonClassNames}`;

  const textareaClassNames = `${commonClassNames} resize-none`;

  const style = {
    width,
  };

  return (
    <>
      {multiline ? (
        <textarea
          className={textareaClassNames}
          name={name}
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          rows={rows}
          style={style}
        />
      ) : (
        <input
          className={inputClassNames}
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          style={style}
        />
      )}
      {errorText && <p className="mt-2 text-xs text-red-600">{errorText}</p>}
    </>
  );
};

TextField.propTypes = {
  type: PropTypes.oneOf(["text", "email", "password"]),
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  errorText: PropTypes.string,
  multiline: PropTypes.bool,
  rows: PropTypes.number,
  width: PropTypes.string,
};

TextField.defaultProps = {
  type: "text",
  multiline: false,
  name: null,
  value: null,
  placeholder: null,
  disabled: false,
  error: false,
  errorText: null,
  rows: 2,
  width: "200px",
};

export default TextField;
