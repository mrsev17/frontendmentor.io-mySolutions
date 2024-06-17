import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface InitialState {
  // bill: {
  //   value: string
  //   error: string
  // }
  // numberOfPeople: {
  //   value: string
  //   error: string
  // }
  // selectTip: {
  //   value: number
  //   custom: string
  //   error: string
  // }
  // tipAmount: number
  // total: number
}

const initialState: InitialState = {
  // bill: {
  //   value: '',
  //   error: '',
  // },
  // numberOfPeople: {
  //   value: '',
  //   error: '',
  // },
  // selectTip: {
  //   value: 0,
  //   custom: '',
  //   error: '',
  // },
  // tipAmount: 0,
  // total: 0,
}

const formCollector = createSlice({
  name: 'formCollector',
  initialState,
  reducers: {
    reloadForm(state) {
      state = initialState
    },
  },
})

export const {} = formCollector.actions
export default formCollector.reducer
