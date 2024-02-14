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
    formThree: {
        onlineService: {
            status: boolean;
            value: number;
        };
        largerStorage: {
            status: boolean;
            value: number;
        };
        customizableProfile: {
            status: boolean;
            value: number;
        };
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
    formThree: {
        onlineService: {
            status: false,
            value: 1,
        },
        largerStorage: {
            status: false,
            value: 2,
        },
        customizableProfile: {
            status: false,
            value: 2,
        },
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
        setSecondStep(state) {
            state.progress.second = false;
            state.progress.third = true;
        },
        // Third form
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
            state.progress.fourd = true;
        },
        goBackFromThirdForm(state) {
            state.progress.second = true;
            state.progress.third = false;
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
} = multiStepSlice.actions;
export default multiStepSlice.reducer;
