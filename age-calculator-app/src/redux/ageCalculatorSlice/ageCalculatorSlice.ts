import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const getDaysInMonth = (year: string, month: string) => {
  return new Date(+year, +month, 0).getDate()
}

interface Calculator {
  years: '- -' | number
  months: '- -' | number
  days: '- -' | number
  errors: {
    years: string
    months: string
    days: string
  }
  inputs: {
    day: string
    month: string
    year: string
  }
}

const initialState: Calculator = {
  years: '- -',
  months: '- -',
  days: '- -',
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
        state.years = '- -'
        state.months = '- -'
        state.days = '- -'
      }
      // Result
      const calculateAge = (
        inputDay: number,
        inputMonth: number,
        inputYear: number
      ) => {
        const currentDate = new Date()
        const currentYear = currentDate.getFullYear()
        const currentMonth = currentDate.getMonth() + 1
        const currentDay = currentDate.getDate()
        let ageYears = currentYear - inputYear
        let ageMonths = currentMonth - inputMonth
        let ageDays = currentDay - inputDay
        if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
          ageYears--
          ageMonths += 12
        }
        if (ageDays < 0) {
          const daysInLastMonth = new Date(inputYear, inputMonth, 0).getDate()
          ageDays += daysInLastMonth
          ageMonths--
        }
        return { years: ageYears, months: ageMonths, days: ageDays }
      }
      const inputDay = +state.inputs.day
      const inputMonth = +state.inputs.month
      const inputYear = +state.inputs.year

      const isPastDate = (
        inputDay: number,
        inputMonth: number,
        inputYear: number
      ) => {
        const currentDate = new Date()
        const currentYear = currentDate.getFullYear()
        const currentMonth = currentDate.getMonth() + 1
        const currentDay = currentDate.getDate()

        if (inputYear > currentYear) {
          return false
        } else if (inputYear < currentYear) {
          return true
        } else {
          if (inputMonth > currentMonth) {
            return false
          } else if (inputMonth < currentMonth) {
            return true
          } else {
            return inputDay <= currentDay - 1
          }
        }
      }
      if (
        isPastDate(+state.inputs.day, +state.inputs.month, +state.inputs.year)
      ) {
        const age = calculateAge(inputDay, inputMonth, inputYear)
        console.log(age)
        state.days = age.days
        state.months = age.months
        state.years = age.years
      } else {
        defaultResults()
      }
      //

      //
      const checkDays = getDaysInMonth(state.inputs.year, state.inputs.month)
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
      const currentYear = new Date().getFullYear()
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
