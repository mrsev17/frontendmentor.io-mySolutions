import { useAppSelector } from '../../hooks'
import styles from './Result.module.scss'

export const Result = () => {
  const getState = useAppSelector((state) => state.bodyMassIndex)

  const currentBmi = (option: 'metric' | 'imperial') => {
    if (option === 'metric') {
      return {
        bmi: getState.metric.bmi,
        msg: getState.metric.message,
        recom: getState.metric.recommendation,
      }
    }
    if (option === 'imperial') {
      return {
        bmi: getState.imperial.bmi,
        msg: getState.imperial.message,
        recom: getState.imperial.recommendation,
      }
    }
  }

  const select = currentBmi(getState.units)

  return (
    <div className={styles.result}>
      <div className={styles.resultStart}>
        {!select?.bmi ? (
          <>
            <h2>Welcome!</h2>
            <p>
              Enter your height and weight and you’ll see your BMI result here
            </p>
          </>
        ) : (
          <div className={styles.resultMetric}>
            <div>
              <span>Your BMI is...</span>
              <h3>{select.bmi}</h3>
            </div>
            <p>
              Your BMI suggests you’re a {select.msg}&#160; weight. Your ideal
              weight is
              <strong> {select.recom}</strong>.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
