import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
// import { RootState } from "../store";

interface Password {
    result: string;
    length: number;
}

const initialState: Password = {
    result: "P4$$w0rD g3n3r4t0r",
    length: 0,
};

const passwordSlice = createSlice({
    name: "password",
    initialState,
    reducers: {
        setLengthPassword(state: Password, action: PayloadAction<number>) {
            state.length = action.payload;
        },
    },
});

export const { setLengthPassword } = passwordSlice.actions;
export default passwordSlice.reducer;
