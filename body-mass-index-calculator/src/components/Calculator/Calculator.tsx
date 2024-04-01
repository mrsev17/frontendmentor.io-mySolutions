import { useState } from 'react'
import styles from './Calculator.module.scss'

export const Calculator = () => {
  const [height, setHeight] = useState<string>('')
  const [weight, setWeight] = useState<string>('')
  const handleHeight = (e: React.ChangeEvent<HTMLInputElement>) => {
    const height = e.target.value.replace(/\D/g, '')
    if (height.length < 4) {
      setHeight(height)
    }
  }
  const handleWeight = (e: React.ChangeEvent<HTMLInputElement>) => {
    const weight = e.target.value.replace(/\D/g, '')
    if (weight.length < 4) {
      setWeight(weight)
    }
  }
  const [metric, setMetric] = useState<boolean>(false)
  const [imperial, setImperial] = useState<boolean>(false)
  return (
    <div className={styles.calculator}>
      <h2>Enter your details below</h2>
      <div className={styles.checkboxesWrapper}>
        <div className={styles.checkbox}>
          <label>
            <input
              type="checkbox"
              checked={metric}
              onChange={() => {
                setMetric(true)
                setImperial(false)
              }}
            />
            <span>Metric</span>
          </label>
        </div>
        <div className={styles.checkbox}>
          <label>
            <input
              type="checkbox"
              checked={imperial}
              onChange={() => {
                setMetric(false)
                setImperial(true)
              }}
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
            value={height}
            placeholder="0"
            onChange={handleHeight}
          />
        </div>
        <div className={styles.weight}>
          <label htmlFor="weight">Weight</label>
          <input
            type="text"
            id="weight"
            value={weight}
            placeholder="0"
            onChange={handleWeight}
          />
        </div>
      </div>
      <div className={styles.result}>
        <div className={styles.resultStart}>
          <h2>Welcome!</h2>
          <p>
            Enter your height and weight and you’ll see your BMI result here
          </p>
        </div>
      </div>
    </div>
  )
}
