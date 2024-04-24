import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface InitialState {
  bill: number
  numberOfPeople: number
  selectTip: {
    value: number
    custom: string
    error: string
  }
  tipAmount: number
  total: number
}

const initialState: InitialState = {
  bill: 0,
  numberOfPeople: 0,
  selectTip: {
    value: 0,
    custom: '',
    error: '',
  },
  tipAmount: 0,
  total: 0,
}

const tipCalculator = createSlice({
  name: 'tipCalculator',
  initialState,
  reducers: {
    setTip(state, action: PayloadAction<number>) {
      state.selectTip.value = action.payload
    },
    setBill(state, action: PayloadAction<string>) {
      state.bill = +action.payload
    },
  },
})

export const { setTip } = tipCalculator.actions
export default tipCalculator.reducer
