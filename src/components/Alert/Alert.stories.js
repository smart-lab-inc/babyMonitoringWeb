import Alert from "./Alert";

export default {
  title: "Alert",
  component: Alert,
  tags: ["autodocs"],
}

export const Success = {
  args: {
    type: "success",
    title: "Message Sent Successfully",
    message: "You have successfully completed the task!"
  },
}

export const Danger = {
  args: {
    type: "error",
    title: "Error!",
    message: "An error has occurred!"
  },
}

export const Warning = {
  args: {
    type: "warning",
    title: "Warning!",
    message: "You are about to delete this item!"
  },
}
