import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { isPastDate, getDaysInMonth } from '../../utils/functions'
import { Calculator, Age } from '../../utils/types'

const initialState: Calculator = {
  result: {
    years: '- -',
    months: '- -',
    days: '- -',
  },
  errors: {
    years: '',
    months: '',
    days: '',
  },
  inputs: {
    day: '',
    month: '',
    year: '',
  },
}

const multiStepSlice = createSlice({
  name: 'ageCalculator',
  initialState,
  reducers: {
    setRestartForm() {
      return initialState
    },
    setDay(state, action: PayloadAction<string>) {
      state.inputs.day = action.payload
    },
    setMonth(state, action: PayloadAction<string>) {
      state.inputs.month = action.payload
    },
    setYear(state, action: PayloadAction<string>) {
      state.inputs.year = action.payload
    },
    setCalculation(state) {
      const defaultResults = () => {
        state.result.years = '- -'
        state.result.months = '- -'
        state.result.days = '- -'
      }
      // Result
      const calculateAge = (
        inputDay: number,
        inputMonth: number,
        inputYear: number
      ) => {
        const currentDate = new Date()
        const currentYear: number = currentDate.getFullYear()
        const currentMonth: number = currentDate.getMonth() + 1
        const currentDay: number = currentDate.getDate()
        let ageYears: number = currentYear - inputYear
        let ageMonths: number = currentMonth - inputMonth
        let ageDays: number = currentDay - inputDay
        if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
          ageYears--
          ageMonths += 12
        }
        if (ageDays < 0) {
          const daysInLastMonth: number = new Date(
            inputYear,
            inputMonth,
            0
          ).getDate()
          ageDays += daysInLastMonth
          ageMonths--
        }
        return { years: ageYears, months: ageMonths, days: ageDays }
      }
      const inputDay: number = +state.inputs.day
      const inputMonth: number = +state.inputs.month
      const inputYear: number = +state.inputs.year
      if (
        isPastDate(+state.inputs.day, +state.inputs.month, +state.inputs.year)
      ) {
        const age: Age = calculateAge(inputDay, inputMonth, inputYear)
        state.result.days = age.days
        state.result.months = age.months
        state.result.years = age.years
      } else {
        defaultResults()
      }
      //
      const checkDays: number = getDaysInMonth(
        state.inputs.year,
        state.inputs.month
      )
      // Days
      const checkDaysInputs = () => {
        if (checkDays < +state.inputs.day || +state.inputs.day < 1) {
          state.errors.days = 'Must be a valid day'
          defaultResults()
        } else {
          state.errors.days = ''
        }
        if (state.inputs.day.length < 1) {
          state.errors.days = 'This field is required'
          defaultResults()
        } else if (
          state.inputs.day.length > 0 &&
          checkDays >= +state.inputs.day
        ) {
          state.errors.days = ''
        }
      }
      checkDaysInputs()
      // Month
      if (+state.inputs.month > 12) {
        state.errors.months = 'Must be a valid month'
        defaultResults()
      }
      if (state.inputs.month.length < 1) {
        state.errors.months = 'This field is required'
        defaultResults()
      } else if (state.inputs.month.length > 0 && +state.inputs.month <= 12) {
        state.errors.months = ''
      }
      // Year
      const currentYear: number = new Date().getFullYear()
      if (+state.inputs.year > currentYear) {
        state.errors.years = 'Must be a valid year'
        defaultResults()
      }
      if (state.inputs.year.length < 1) {
        state.errors.years = 'This field is required'
        defaultResults()
      } else if (
        state.inputs.month.length > 0 &&
        +state.inputs.month <= currentYear
      ) {
        state.errors.years = ''
      }
    },
  },
})

export const { setDay, setMonth, setYear, setCalculation } =
  multiStepSlice.actions
export default multiStepSlice.reducer
