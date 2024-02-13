import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FirstStep {
    name: string;
    mail: string;
    phone: string;
}

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
        status: boolean;
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
        status: false,
    },
};

const multiStepSlice = createSlice({
    name: "multiStep",
    initialState,
    reducers: {
        setFirstStep(state, action: PayloadAction<FirstStep>) {
            state.formOne.fullName = action.payload.name;
            state.formOne.mail = action.payload.mail;
            state.formOne.phone = action.payload.phone;
            state.formOne.status = true;
            state.progress.first = false;
            state.progress.second = true;
        },
    },
});

export const { setFirstStep } = multiStepSlice.actions;
export default multiStepSlice.reducer;
