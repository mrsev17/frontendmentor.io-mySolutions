import { Errors, ResultItem } from './types'

export const checkForError = (getErrors: Errors): boolean | undefined => {
  if (
    getErrors.days.length ||
    getErrors.months.length ||
    getErrors.years.length
  ) {
    return true
  }
}

export const resultData = (
  years: number | '- -',
  months: number | '- -',
  days: number | '- -'
): ResultItem[] => [
  {
    output: years,
    text: 'year',
  },
  {
    output: months,
    text: 'month',
  },
  {
    output: days,
    text: 'day',
  },
]

export const getDaysInMonth = (year: string, month: string): number => {
  return new Date(+year, +month, 0).getDate()
}

export const isPastDate = (
  inputDay: number,
  inputMonth: number,
  inputYear: number
) => {
  const currentDate = new Date()
  const currentYear: number = currentDate.getFullYear()
  const currentMonth: number = currentDate.getMonth() + 1
  const currentDay: number = currentDate.getDate()

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
