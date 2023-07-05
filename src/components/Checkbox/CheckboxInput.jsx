import { Checkbox } from "@nextui-org/react";
import "../../index.css";

const CheckboxInput = ({ label, id, value }) => {
  return (
    <Checkbox color="primary" size="md" id={id} value={value}>
      {label}
    </Checkbox>
  );
};

export default CheckboxInput;
