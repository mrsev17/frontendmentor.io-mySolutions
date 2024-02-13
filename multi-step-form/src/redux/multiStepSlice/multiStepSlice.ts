import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MultiStepFormSlice {
    progress: {
        first: boolean;
        second: boolean;
        third: boolean;
        fourd: boolean;
    };
    formOne: {
        fullName: string;
        mail: string;
        phone: string;
    };
    formTwo: {
        plan: string;
        option: string;
    };
}

const initialState: MultiStepFormSlice = {
    progress: {
        first: true,
        second: false,
        third: false,
        fourd: false,
    },
    formOne: {
        fullName: "",
        mail: "",
        phone: "",
    },
    formTwo: {
        plan: "Arcade",
        option: "Monthly",
    },
};

const multiStepSlice = createSlice({
    name: "multiStep",
    initialState,
    reducers: {
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
            state.formTwo.plan = action.payload;
        },
        setBilling(state, action: PayloadAction<boolean>) {
            if (!action.payload) {
                state.formTwo.option = "Yearly";
            }
            if (action.payload) {
                state.formTwo.option = "Monthly";
            }
        },
        goBackFromSecondForm(state) {
            state.progress.first = true;
            state.progress.second = false;
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
} = multiStepSlice.actions;
export default multiStepSlice.reducer;
