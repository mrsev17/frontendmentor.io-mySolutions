import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
// import { RootState } from "../store";

interface Password {
    result: string;
    length: number;
    includeUppercaseLetters: boolean;
    includeLowerCaseLetters: boolean;
    includeNumbers: boolean;
    includeSymbols: boolean;
}

const initialState: Password = {
    result: "P4$$w0rD g3n3r4t0r",
    length: 0,
    includeUppercaseLetters: false,
    includeLowerCaseLetters: false,
    includeNumbers: false,
    includeSymbols: false,
};

const passwordSlice = createSlice({
    name: "password",
    initialState,
    reducers: {
        setLengthPassword(state, action: PayloadAction<number>) {
            state.length = action.payload;
        },
        setOptionsRegister(state, action: PayloadAction<string>) {
            if (action.payload === "Include Uppercase Letters") {
                state.includeUppercaseLetters = !state.includeUppercaseLetters;
            }
            if (action.payload === "Include Lowercase Letters") {
                state.includeLowerCaseLetters = !state.includeLowerCaseLetters;
            }
            if (action.payload === "Include Numbers") {
                state.includeNumbers = !state.includeNumbers;
            }
            if (action.payload === "Include Symbols") {
                state.includeSymbols = !state.includeSymbols;
            }
        },
    },
});

export const { setLengthPassword, setOptionsRegister } = passwordSlice.actions;
export default passwordSlice.reducer;
