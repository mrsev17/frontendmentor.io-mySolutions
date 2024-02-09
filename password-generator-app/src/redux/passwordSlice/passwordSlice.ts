import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { generatePassword } from "utils/functions";

interface PasswordOptions {
    includeUppercaseLetters: boolean;
    includeLowerCaseLetters: boolean;
    includeNumbers: boolean;
    includeSymbols: boolean;
}

interface Password {
    result: string;
    length: number;
    strength: number;
    passwordOptions: PasswordOptions;
}

const initialState: Password = {
    result: "P4$$w0rDg3n3r4t0r",
    length: 0,
    strength: 0,
    passwordOptions: {
        includeUppercaseLetters: false,
        includeLowerCaseLetters: false,
        includeNumbers: false,
        includeSymbols: false,
    },
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
                state.passwordOptions.includeUppercaseLetters =
                    !state.passwordOptions.includeUppercaseLetters;
            }
            if (action.payload === "Include Lowercase Letters") {
                state.passwordOptions.includeLowerCaseLetters =
                    !state.passwordOptions.includeLowerCaseLetters;
            }
            if (action.payload === "Include Numbers") {
                state.passwordOptions.includeNumbers =
                    !state.passwordOptions.includeNumbers;
            }
            if (action.payload === "Include Symbols") {
                state.passwordOptions.includeSymbols =
                    !state.passwordOptions.includeSymbols;
            }
            const calcStrength = (): number => {
                let trueCount: number = 0;
                for (const key in state.passwordOptions) {
                    if (
                        state.passwordOptions[key as keyof PasswordOptions] ===
                        true
                    ) {
                        trueCount += 1;
                    }
                }
                return (state.strength = trueCount);
            };
            calcStrength();
        },
        setGeneratePassword(state) {
            const options = {
                useUpperCase: state.passwordOptions.includeUppercaseLetters,
                useLowerCase: state.passwordOptions.includeLowerCaseLetters,
                useNumbers: state.passwordOptions.includeNumbers,
                useSymbols: state.passwordOptions.includeSymbols,
                length: state.length,
            };
            const result = generatePassword(options);
            state.result = result;
        },
    },
});

export const { setLengthPassword, setOptionsRegister, setGeneratePassword } =
    passwordSlice.actions;
export default passwordSlice.reducer;
