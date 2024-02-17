import { FormThreeArray } from "./types";

export const checkAbr = (term: string): string => {
    if (term === "Monthly") {
        return "mo";
    } else {
        return "yr";
    }
};

export const calcFullPrice = (
    pricePlan: number,
    formArray: FormThreeArray[]
) => {
    const getPriceForAddons = () => {
        return formArray.reduce((acc, addon) => {
            if (addon.value.status) {
                acc += addon.value.value;
            }
            return acc;
        }, 0);
    };
    return getPriceForAddons() + pricePlan;
};
