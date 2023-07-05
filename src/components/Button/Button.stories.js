import Button from "./Button";
import CartIcon from "../../assets/svg/cart-full.svg";

export default {
    title: "Button",
    component: Button,
    tags: ["autodocs"],
};

export const Primary = {
    args: {
        primary: true,
        label: "Button"
    },
};

export const Secondary = {
    args: {
        primary: false,
        label: "Button"
    },
};

export const PrimaryWithIcon = {
    args: {
        icon: CartIcon,
        primary: true,
        label: "Button with icon"
    },
};

export const SecondaryWithIcon = {
    args: {
        icon: CartIcon,
        primary: false,
        label: "Button with icon"
    },
};

export const PrimaryWidthFull = {
    args: {
        size: "w-full",
        primary: true,
        label: "Button"
    },
};

export const SecondaryWidthFull = {
    args: {
        size: "w-full",
        primary: false,
        label: "Button"
    },
};
