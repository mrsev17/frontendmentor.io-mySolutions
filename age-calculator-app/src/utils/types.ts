export interface Calculator {
  result: {
    years: '- -' | number
    months: '- -' | number
    days: '- -' | number
  }
  errors: Errors
  inputs: InputsTypes
}

export interface CalculatorResult {
  years: '- -' | number
  months: '- -' | number
  days: '- -' | number
}

export interface Errors {
  years: string
  months: string
  days: string
}

export interface InputsTypes {
  day: string
  month: string
  year: string
}

export interface ResultItem {
  output: number | '- -'
  text: string
}

export interface Age {
  years: number
  months: number
  days: number
}
