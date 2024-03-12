import { useAppSelector } from '../../hooks'
import { CalculatorResult } from '../../utils/types'
import styles from './Result.module.css'

export const Result = () => {
  const getResult: CalculatorResult = useAppSelector(
    (state) => state.ageCalculator
  )
  return (
    <div className={styles.result}>
      <h2>
        <span>{getResult.years}</span>year{getResult.years === 1 ? '' : 's'}
      </h2>
      <h2>
        <span>{getResult.months}</span>month{getResult.months === 1 ? '' : 's'}
      </h2>
      <h2>
        <span>{getResult.days}</span>day{getResult.days === 1 ? '' : 's'}
      </h2>
    </div>
  )
}
