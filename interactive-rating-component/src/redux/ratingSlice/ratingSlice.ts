import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface RatingState {
  value: number
  options: number[]
  submit: boolean
}

const initialState: RatingState = {
  value: 0,
  options: [1, 2, 3, 4, 5],
  submit: false,
}

export const counterSlice = createSlice({
  name: 'rating',
  initialState,
  reducers: {
    setRating: (state, action: PayloadAction<number>) => {
      state.value = action.payload
    },
    setSubmit: (state) => {
      state.submit = true
    },
  },
})

export const { setRating, setSubmit } = counterSlice.actions
export const selectCount = (state: RootState) => state.rating.value
export default counterSlice.reducer
