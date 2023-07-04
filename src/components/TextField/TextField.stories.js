import TextField from "./TextField";

export default {
  title: "TextField",
  component: TextField,
  tags: ["autodocs"],
}

export const Input = {
  args: {
    type: "text",
    label: "Label",
    multiline: false,
    name: null,
    value: null,
    placeholder: null,
    disabled: false,
    error: false,
    errorText: null,
    rows: 0,
    width: "200px",
  },
}

export const InputDisabled = {
  args: {
    type: "text",
    label: "Label",
    multiline: false,
    name: null,
    value: null,
    placeholder: null,
    disabled: true,
    error: false,
    errorText: null,
    rows: 0,
    width: "200px",
  },
}

export const InputError = {
  args: {
    type: "text",
    label: "Label",
    multiline: false,
    name: null,
    value: null,
    placeholder: null,
    disabled: false,
    error: true,
    errorText: "Error text",
    rows: 0,
    width: "200px",
  },
}

export const Multiline = {
  args: {
    type: "text",
    label: "Label",
    multiline: true,
    name: null,
    value: null,
    placeholder: null,
    disabled: false,
    error: false,
    errorText: null,
    rows: 2,
    width: "200px",
  },
}

export const MultilineDisabled = {
  args: {
    type: "text",
    label: "Label",
    multiline: true,
    name: null,
    value: null,
    placeholder: null,
    disabled: true,
    error: false,
    errorText: null,
    rows: 2,
    width: "200px",
  },
}
export const MultilineError = {
  args: {
    type: "text",
    label: "Label",
    multiline: true,
    name: null,
    value: null,
    placeholder: null,
    disabled: false,
    error: true,
    errorText: "Error text",
    rows: 2,
    width: "200px",
  },
}
