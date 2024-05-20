import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import { generatePassword } from 'utils/functions'

// interface PasswordOptions {
//   includeUppercaseLetters: boolean
//   includeLowerCaseLetters: boolean
//   includeNumbers: boolean
//   includeSymbols: boolean
// }

// interface Password {
//   result: string
//   length: number
//   strength: number
//   passwordOptions: PasswordOptions
// }

const initialState = {
  result: '',
  length: 0,
  strength: 0,
}

const passwordSlice = createSlice({
  name: 'password',
  initialState,
  reducers: {
    setLengthPassword(state, action: PayloadAction<number>) {
      state.length = action.payload
    },
  },
})

export const {} = passwordSlice.actions
export default passwordSlice.reducer
