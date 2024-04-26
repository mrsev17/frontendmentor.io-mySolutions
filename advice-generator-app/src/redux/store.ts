import { configureStore } from '@reduxjs/toolkit'
import tipCalculatorReducer from './adviceSlice'

export const store = configureStore({
  reducer: {
    advices: tipCalculatorReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
