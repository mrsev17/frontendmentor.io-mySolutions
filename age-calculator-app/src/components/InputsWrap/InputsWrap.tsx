import {
  setDay,
  setMonth,
  setYear,
} from '../../redux/ageCalculatorSlice/ageCalculatorSlice'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { checkForError } from '../../utils/functions'
import { Errors, InputsTypes } from '../../utils/types'
import styles from './InputsWrap.module.css'

export const InputsWrap = () => {
  const dispatch = useAppDispatch()
  const getInputs: InputsTypes = useAppSelector(
    (state) => state.ageCalculator.inputs
  )
  const getErrors: Errors = useAppSelector(
    (state) => state.ageCalculator.errors
  )
  const inputHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    typeInput: string
  ) => {
    const input: string = e.target.value
    if (/^\d*$/.test(input)) {
      if (typeInput === 'day') dispatch(setDay(input))
      if (typeInput === 'month') dispatch(setMonth(input))
      if (typeInput === 'year') dispatch(setYear(input))
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
          onChange={(e) => inputHandler(e, 'day')}
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
          onChange={(e) => inputHandler(e, 'month')}
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
          onChange={(e) => inputHandler(e, 'year')}
          maxLength={4}
        />
        <span>{getErrors.years}</span>
      </div>
    </form>
  )
}
