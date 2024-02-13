import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    formOne: "",
};

const multiStepSlice = createSlice({
    name: "multiStep",
    initialState,
    reducers: {},
});

export const {} = multiStepSlice.actions;
export default multiStepSlice.reducer;
