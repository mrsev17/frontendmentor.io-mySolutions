import {
  setUnits,
  setMetricHeight,
  setMetricWeight,
} from '../../redux/bmiSlice/bmiSlice'
import { useAppDispatch, useAppSelector } from '../../hooks'
import styles from './Calculator.module.scss'

export const Calculator = () => {
  const getState = useAppSelector((state) => state.bodyMassIndex)
  const dispatch = useAppDispatch()
  const handleHeight = (e: React.ChangeEvent<HTMLInputElement>) => {
    const height = e.target.value.replace(/\D/g, '')
    if (height.length < 4) {
      dispatch(setMetricHeight(height))
    }
  }
  const handleWeight = (e: React.ChangeEvent<HTMLInputElement>) => {
    const weight = e.target.value.replace(/\D/g, '')
    if (weight.length < 4) {
      dispatch(setMetricWeight(weight))
    }
  }
  return (
    <div className={styles.calculator}>
      <h2>Enter your details below</h2>
      <div className={styles.checkboxesWrapper}>
        <div className={styles.checkbox}>
          <label>
            <input
              type="checkbox"
              checked={getState.units === 'metric'}
              onChange={() => dispatch(setUnits('metric'))}
            />
            <span>Metric</span>
          </label>
        </div>
        <div className={styles.checkbox}>
          <label>
            <input
              type="checkbox"
              checked={getState.units === 'imperial'}
              onChange={() => dispatch(setUnits('imperial'))}
            />
            <span>Imperial</span>
          </label>
        </div>
      </div>
      <div className={styles.inputsWrapper}>
        <div className={styles.height}>
          <label htmlFor="height">Height</label>
          <input
            type="text"
            id="height"
            value={getState.metric.height === 0 ? '' : getState.metric.height}
            placeholder="0"
            onChange={handleHeight}
          />
        </div>
        <div className={styles.weight}>
          <label htmlFor="weight">Weight</label>
          <input
            type="text"
            id="weight"
            value={getState.metric.weight === 0 ? '' : getState.metric.weight}
            placeholder="0"
            onChange={handleWeight}
          />
        </div>
      </div>
      <div className={styles.result}>
        <div className={styles.resultStart}>
          {!getState.metric.bmi ? (
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
                <h3>{getState.metric.bmi}</h3>
              </div>
              <p>
                Your BMI suggests you’re a {getState.metric.message} weight.
                Your ideal weight is
                <strong> {getState.metric.recommendation}</strong>.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
