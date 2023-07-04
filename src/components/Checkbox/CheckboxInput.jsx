import { Checkbox } from "@nextui-org/react";
import "../../index.css";

const CheckboxInput = ({ label, id }) => {
  return (
    <Checkbox color="primary" size="md" id={id}>
      {label}
    </Checkbox>
  );
};

export default CheckboxInput;
