import Snackbar from "./Snackbar"

export default {
  title: "Snackbar",
  component: Snackbar,
  tags: ["autodocs"],
}

export const Success = {
  args: {
    type: "success",
    message: "You have successfully completed the task!"
  },
}

export const Danger = {
  args: {
    type: "error",
    message: "An error has occurred!"
  },
}

export const Warning = {
  args: {
    type: "warning",
    message: "You are about to delete this item!"
  },
}
