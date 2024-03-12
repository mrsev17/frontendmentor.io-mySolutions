import { useAppSelector } from '../../hooks'
import { resultData } from '../../utils/functions'
import styles from './Result.module.css'

export const Result = () => {
  const getResultYears: number | '- -' = useAppSelector(
    (state) => state.ageCalculator.result.years
  )
  const getResultMonths: number | '- -' = useAppSelector(
    (state) => state.ageCalculator.result.months
  )
  const getResultDays: number | '- -' = useAppSelector(
    (state) => state.ageCalculator.result.days
  )
  const getResultData = resultData(
    getResultYears,
    getResultMonths,
    getResultDays
  )
  return (
    <div className={styles.result}>
      {getResultData.map((result) => {
        return (
          <h2 key={result.text}>
            <span>{result.output}</span>
            {result.text}
            {result.output === 1 ? '' : 's'}
          </h2>
        )
      })}
    </div>
  )
}
