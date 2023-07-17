import PropTypes from "prop-types";

const TextField = ({ type, label, name, value, placeholder, disabled, error, errorText, multiline, rows, width, handleBlur, handleChange, maxLength }) => {
  const commonClassNames = `${width} block rounded-md border-0 mt-2 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${error ? "ring-red-600" : "ring-gray-300"
    } outline-none placeholder:text-gray-500 focus:ring-1 focus:ring-inset ${error ? "focus:ring-red-600" : "focus:ring-blue-700"
    } sm:text-sm sm:leading-6 ${disabled && "bg-slate-100"}`;

  const inputClassNames = `${commonClassNames}`;

  const textareaClassNames = `${commonClassNames} resize-none`;

  return (
    <>
      <label className="text-sm text-medium text-stone-950" htmlFor={name}>{label}</label>
      {multiline ? (
        <textarea
          id={name}
          className={textareaClassNames}
          name={name}
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          rows={rows}
          onBlur={handleBlur}
          onChange={handleChange}
        />
      ) : (
        <input
          id={name}
          className={inputClassNames}
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          onBlur={handleBlur}
          onChange={handleChange}
          maxLength={maxLength}
        />
      )}
      {errorText && <p className="mt-2 text-xs text-red-600">{errorText}</p>}
    </>
  );
};

TextField.propTypes = {
  type: PropTypes.oneOf(["text", "email", "password"]),
  label: PropTypes.string.isRequired,
  multiline: PropTypes.bool,
  width: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  errorText: PropTypes.string,
  rows: PropTypes.number,
  handleBlur: PropTypes.func,
  handleChange: PropTypes.func,
};

TextField.defaultProps = {
  type: "text",
  label: "Label",
  multiline: false,
  width: "w-full",
  name: null,
  value: null,
  placeholder: null,
  disabled: false,
  error: false,
  errorText: null,
  rows: 2,
  handleBlur: undefined,
  handleChange: undefined,
};

export default TextField;
