import { useState } from 'react'
import {
  setDay,
  setMonth,
  setYear,
} from '../../redux/ageCalculatorSlice/ageCalculatorSlice'
import styles from './InputsWrap.module.css'
import { useAppDispatch, useAppSelector } from '../../hooks'

export const InputsWrap = () => {
  const dispatch = useAppDispatch()

  const getInputs = useAppSelector((state) => state.ageCalculator.inputs)
  const getErrors = useAppSelector((state) => state.ageCalculator.errors)

  const dayInputHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const input: string = e.target.value
    if (/^\d*$/.test(input)) {
      dispatch(setDay(input))
    }
  }

  const monthInputHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const input: string = e.target.value
    if (/^\d*$/.test(input)) {
      dispatch(setMonth(input))
    }
  }

  const yearInputHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const input: string = e.target.value
    if (/^\d*$/.test(input)) {
      dispatch(setYear(input))
    }
  }

  interface Errors {
    years: string
    months: string
    days: string
  }

  const checkForError = (getErrors: Errors) => {
    if (
      getErrors.days.length ||
      getErrors.months.length ||
      getErrors.years.length
    ) {
      return true
    }
  }

  return (
    <form className={styles.inputsWrap}>
      <div className={styles.inputItem}>
        <label
          className={checkForError(getErrors) ? styles.makeRedText : null}
          htmlFor="day"
        >
          Day
        </label>
        <input
          className={checkForError(getErrors) ? styles.makeRedBorder : null}
          type="text"
          id="day"
          value={getInputs.day}
          placeholder="DD"
          onChange={(e) => dayInputHandler(e)}
          maxLength={2}
        />
        <span>{getErrors.days}</span>
      </div>
      <div className={styles.inputItem}>
        <label
          className={checkForError(getErrors) && styles.makeRedText}
          htmlFor="month"
        >
          Month
        </label>
        <input
          className={checkForError(getErrors) && styles.makeRedBorder}
          type="text"
          id="month"
          value={getInputs.month}
          placeholder="MM"
          onChange={(e) => monthInputHandler(e)}
          maxLength={2}
        />
        <span>{getErrors.months}</span>
      </div>
      <div className={styles.inputItem}>
        <label
          className={checkForError(getErrors) && styles.makeRedText}
          htmlFor="year"
        >
          Year
        </label>
        <input
          className={checkForError(getErrors) && styles.makeRedBorder}
          type="text"
          id="year"
          value={getInputs.year}
          placeholder="YYYY"
          onChange={(e) => yearInputHandler(e)}
          maxLength={4}
        />
        <span>{getErrors.years}</span>
      </div>
    </form>
  )
}
