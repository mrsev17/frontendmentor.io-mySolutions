import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface InitialState {
  selectTip: number
}

const initialState: InitialState = {
  selectTip: 0,
}

const tipCalculator = createSlice({
  name: 'tipCalculator',
  initialState,
  reducers: {
    setTip(state, action: PayloadAction<number>) {
      state.selectTip = action.payload
    },
  },
})

export const { setTip } = tipCalculator.actions
export default tipCalculator.reducer
