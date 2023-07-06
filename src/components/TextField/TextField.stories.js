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
    width: "w-1/3",
    name: null,
    value: null,
    placeholder: null,
    disabled: false,
    error: false,
    errorText: null,
    rows: 0,
  },
}

export const InputDisabled = {
  args: {
    type: "text",
    label: "Label",
    multiline: false,
    width: "w-1/3",
    name: null,
    value: null,
    placeholder: null,
    disabled: true,
    error: false,
    errorText: null,
    rows: 0,
  },
}

export const InputError = {
  args: {
    type: "text",
    label: "Label",
    multiline: false,
    width: "w-1/3",
    name: null,
    value: null,
    placeholder: null,
    disabled: false,
    error: true,
    errorText: "Error text",
    rows: 0,
  },
}

export const Multiline = {
  args: {
    type: "text",
    label: "Label",
    multiline: true,
    width: "w-1/2",
    name: null,
    value: null,
    placeholder: null,
    disabled: false,
    error: false,
    errorText: null,
    rows: 2,
  },
}

export const MultilineDisabled = {
  args: {
    type: "text",
    label: "Label",
    multiline: true,
    width: "w-1/3",
    name: null,
    value: null,
    placeholder: null,
    disabled: true,
    error: false,
    errorText: null,
    rows: 2,
  },
}
export const MultilineError = {
  args: {
    type: "text",
    label: "Label",
    multiline: true,
    width: "w-1/3",
    name: null,
    value: null,
    placeholder: null,
    disabled: false,
    error: true,
    errorText: "Error text",
    rows: 2,
  },
}
