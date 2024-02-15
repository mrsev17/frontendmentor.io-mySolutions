import arcadeIcon from "../assets/images/icon-arcade.svg";
import advancedIcon from "../assets/images/icon-advanced.svg";
import proIcon from "../assets/images/icon-pro.svg";

export const planData = (plan: any) => [
    {
        option: "Arcade",
        value: 9,
        icon: arcadeIcon,
        selected() {
            return this.option === plan;
        },
    },
    {
        option: "Advanced",
        value: 12,
        icon: advancedIcon,
        selected() {
            return this.option === plan;
        },
    },
    {
        option: "Pro",
        value: 15,
        icon: proIcon,
        selected() {
            return this.option === plan;
        },
    },
];

export const widgetData = [
    {
        step: 1,
        text: "your info",
    },
    {
        step: 2,
        text: "select plan",
    },
    {
        step: 3,
        text: "add-ons",
    },
    {
        step: 4,
        text: "summary",
    },
];
