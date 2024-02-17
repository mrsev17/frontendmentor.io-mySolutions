import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MultiStepFormSlice } from "utils/types";

const initialState: MultiStepFormSlice = {
    priceListPlans: {
        arcade: 9,
        advanced: 12,
        pro: 15,
    },
    progress: {
        first: true,
        second: false,
        third: false,
        fourth: false,
        thankYou: false,
    },
    formOne: {
        fullName: "",
        mail: "",
        phone: "",
    },
    formTwo: {
        plan: "Arcade",
        option: "Monthly",
        price: 9,
        statusOption: false,
    },
    formThree: {
        onlineService: {
            status: false,
            value: 1,
            serviceName: "Online service",
        },
        largerStorage: {
            status: false,
            value: 2,
            serviceName: "Larger storage",
        },
        customizableProfile: {
            status: false,
            value: 2,
            serviceName: "Customizable Profile",
        },
    },
};

const multiStepSlice = createSlice({
    name: "multiStep",
    initialState,
    reducers: {
        setRestartForm() {
            return initialState;
        },
        setInputName(state, action: PayloadAction<string>) {
            state.formOne.fullName = action.payload;
        },
        setInputMail(state, action: PayloadAction<string>) {
            state.formOne.mail = action.payload;
        },
        setInputPhone(state, action: PayloadAction<string>) {
            state.formOne.phone = action.payload;
        },
        setFirstStep(state) {
            state.progress.first = false;
            state.progress.second = true;
        },
        setSecondFormPlan(state, action: PayloadAction<string>) {
            if (action.payload === "Arcade") {
                if (state.formTwo.option === "Monthly") {
                    state.formTwo.price = 9;
                } else if (state.formTwo.option === "Yearly") {
                    state.formTwo.price = 9 * 10;
                }
            }
            if (action.payload === "Advanced") {
                if (state.formTwo.option === "Monthly") {
                    state.formTwo.price = 12;
                } else if (state.formTwo.option === "Yearly") {
                    state.formTwo.price = 12 * 10;
                }
            }
            if (action.payload === "Pro") {
                if (state.formTwo.option === "Monthly") {
                    state.formTwo.price = 15;
                } else if (state.formTwo.option === "Yearly") {
                    state.formTwo.price = 15 * 10;
                }
            }
            state.formTwo.plan = action.payload;
        },
        setBilling(state, action: PayloadAction<boolean>) {
            if (!action.payload) {
                state.formTwo.option = "Yearly";
                state.formTwo.statusOption = true;
                state.formTwo.price = state.formTwo.price * 10;
                state.formThree.onlineService.value = 1 * 10;
                state.formThree.customizableProfile.value = 2 * 10;
                state.formThree.largerStorage.value = 2 * 10;
            }
            if (action.payload) {
                state.formTwo.option = "Monthly";
                state.formTwo.statusOption = false;
                state.formTwo.price = state.formTwo.price / 10;
                state.formThree.onlineService.value = 1;
                state.formThree.customizableProfile.value = 2;
                state.formThree.largerStorage.value = 2;
            }
        },
        goBackFromSecondForm(state) {
            state.progress.first = true;
            state.progress.second = false;
        },
        setSecondStep(state) {
            state.progress.second = false;
            state.progress.third = true;
        },
        setService(state, action: PayloadAction<string>) {
            if (action.payload === "Online Service") {
                state.formThree.onlineService.status =
                    !state.formThree.onlineService.status;
            }
            if (action.payload === "Larger storage") {
                state.formThree.largerStorage.status =
                    !state.formThree.largerStorage.status;
            }
            if (action.payload === "Customizable Profile") {
                state.formThree.customizableProfile.status =
                    !state.formThree.customizableProfile.status;
            }
        },
        setThirdStep(state) {
            state.progress.third = false;
            state.progress.fourth = true;
        },
        goBackFromThirdForm(state) {
            state.progress.second = true;
            state.progress.third = false;
        },
        setBackToSecondFromFourth(state) {
            state.progress.fourth = false;
            state.progress.second = true;
        },
        setGoBackFromFourth(state) {
            state.progress.fourth = false;
            state.progress.third = true;
        },
        setThankYouPage(state) {
            state.progress.fourth = false;
            state.progress.thankYou = true;
        },
    },
});

export const {
    setFirstStep,
    setSecondFormPlan,
    setBilling,
    goBackFromSecondForm,
    setInputName,
    setInputMail,
    setInputPhone,
    setSecondStep,
    setService,
    setThirdStep,
    goBackFromThirdForm,
    setBackToSecondFromFourth,
    setGoBackFromFourth,
    setThankYouPage,
    setRestartForm,
} = multiStepSlice.actions;
export default multiStepSlice.reducer;
