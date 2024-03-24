import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface BMICalculator {
  defaultState: number
}

const initialState: BMICalculator = {
  defaultState: 0,
}

const bmiSlice = createSlice({
  name: 'bmiCalculator',
  initialState,
  reducers: {
    setRestartCalculator() {
      return initialState
    },
  },
})

export const { setRestartCalculator } = bmiSlice.actions
export default bmiSlice.reducer
