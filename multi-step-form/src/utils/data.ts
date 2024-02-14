import arcadeIcon from "../assets/images/icon-arcade.svg";
import advancedIcon from "../assets/images/icon-advanced.svg";
import proIcon from "../assets/images/icon-pro.svg";

export const planData = (plan: any) => [
    {
        option: "Arcade",
        value: "$9/mo",
        icon: arcadeIcon,
        selected() {
            return this.option === plan;
        },
    },
    {
        option: "Advanced",
        value: "$12/mo",
        icon: advancedIcon,
        selected() {
            return this.option === plan;
        },
    },
    {
        option: "Pro",
        value: "$15/mo",
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

export const dataService = [
    {
        serviceName: "Online Service",
        description: "Access to multiplayer games",
        price: 1,
    },
    {
        serviceName: "Larger storage",
        description: "Extra 1TB of cloud save",
        price: 2,
    },
    {
        serviceName: "Customizable Profile",
        description: "Custom theme on your profile",
        price: 2,
    },
];
