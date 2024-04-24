import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface InitialState {
  bill: {
    value: string
    error: string
  }
  numberOfPeople: {
    value: string
    error: string
  }
  selectTip: {
    value: number
    custom: string
    error: string
  }
  tipAmount: number
  total: number
}

const initialState: InitialState = {
  bill: {
    value: '',
    error: '',
  },
  numberOfPeople: {
    value: '',
    error: '',
  },
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
      state.bill.value = action.payload
    },
    setNumberOfPeople(state, action: PayloadAction<string>) {
      state.numberOfPeople.value = action.payload
    },
    setCustomTip(state, action: PayloadAction<string>) {
      state.selectTip.custom = action.payload
      state.selectTip.value = +action.payload
    },
    calculateTip(state) {
      const bill = state.bill.value
      const numberOfPeople = state.numberOfPeople.value
      const tip = state.selectTip.value

      const calculate = (
        billValue: string,
        valuePeople: string,
        tipValue: string
      ) => {
        const getPersonAmount = (+billValue / +valuePeople) * (0.01 * +tipValue)
        const getTotal = +billValue / +valuePeople + getPersonAmount
        state.tipAmount = +getPersonAmount.toFixed(2)
        state.total = +getTotal.toFixed(2)
      }

      if (+bill === 0) {
        state.bill.error = 'Can’t be zero'
      } else {
        calculate(bill, numberOfPeople, tip.toString())
        state.bill.error = ''
      }

      if (+numberOfPeople === 0) {
        state.numberOfPeople.error = 'Can’t be zero'
      } else {
        calculate(bill, numberOfPeople, tip.toString())
        state.numberOfPeople.error = ''
      }

      if (+tip === 0) {
        state.selectTip.error = 'Can’t be zero'
      } else if (+tip > 100) {
        state.selectTip.error = 'Can’t be more then 100'
      } else {
        calculate(bill, numberOfPeople, tip.toString())
        state.selectTip.error = ''
      }
    },
  },
})

export const {
  setTip,
  setBill,
  setNumberOfPeople,
  setCustomTip,
  calculateTip,
} = tipCalculator.actions
export default tipCalculator.reducer
