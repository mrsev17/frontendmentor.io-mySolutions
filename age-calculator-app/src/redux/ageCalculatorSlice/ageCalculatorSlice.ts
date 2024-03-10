import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Calculator {
  years: '- -' | number
  months: '- -' | number
  days: '- -' | number
}

const initialState: Calculator = {
  years: '- -',
  months: '- -',
  days: '- -',
}

const multiStepSlice = createSlice({
  name: 'ageCalculator',
  initialState,
  reducers: {
    setRestartForm() {
      return initialState
    },
  },
})

export const {} = multiStepSlice.actions
export default multiStepSlice.reducer
