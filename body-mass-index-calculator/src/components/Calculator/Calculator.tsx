import {
  setUnits,
  setMetricHeight,
  setMetricWeight,
  setImperialHeightFt,
  setImperialHeightIn,
  setImperialWeightLbs,
  setImperialWeightSt,
} from '../../redux/bmiSlice/bmiSlice'
import { useAppDispatch, useAppSelector } from '../../hooks'
import styles from './Calculator.module.scss'
import { InputCalc } from '../InputCalc'
import { Result } from '../Reesult'

export const Calculator = () => {
  const getState = useAppSelector((state) => state.bodyMassIndex)
  const dispatch = useAppDispatch()

  const handleHeightMetric = (e: React.ChangeEvent<HTMLInputElement>) => {
    const height = e.target.value.replace(/\D/g, '')
    if (height.length < 4 || height === '') {
      dispatch(setMetricHeight(height))
    }
  }

  const handleWeightMetric = (e: React.ChangeEvent<HTMLInputElement>) => {
    const weight = e.target.value.replace(/\D/g, '')
    if (weight.length < 4 || weight === '') {
      dispatch(setMetricWeight(weight))
    }
  }

  //

  const handleHeightImperialFt = (e: React.ChangeEvent<HTMLInputElement>) => {
    const heightFt = e.target.value.replace(/\D/g, '')
    if (heightFt.length < 4 || heightFt !== '') {
      dispatch(setImperialHeightFt(heightFt))
    }
  }

  const handleHeightImperialIn = (e: React.ChangeEvent<HTMLInputElement>) => {
    const heightIn = e.target.value.replace(/\D/g, '')
    if (heightIn.length < 4 || heightIn !== '') {
      dispatch(setImperialHeightIn(heightIn))
    }
  }

  const handleWeightImperialSt = (e: React.ChangeEvent<HTMLInputElement>) => {
    const weightIn = e.target.value.replace(/\D/g, '')
    if (weightIn.length < 4 || weightIn !== '') {
      dispatch(setImperialWeightSt(weightIn))
    }
  }

  const handleWeightImperialLbs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const weightLbs = e.target.value.replace(/\D/g, '')
    if (weightLbs.length < 4 || weightLbs !== '') {
      dispatch(setImperialWeightLbs(weightLbs))
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
      <>
        {getState.units === 'metric' ? (
          <div className={styles.metricInputs}>
            <InputCalc
              textLabel="Height"
              placeholder="0"
              value={getState.metric.height}
              point="cm"
              actChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleHeightMetric(e)
              }
            />
            <InputCalc
              textLabel="Weight"
              placeholder="0"
              value={getState.metric.weight}
              point="kg"
              actChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleWeightMetric(e)
              }
            />
          </div>
        ) : (
          <div className={styles.imperialInputs}>
            <div className={styles.imperialNest}>
              <InputCalc
                textLabel="Height"
                placeholder="0"
                value={getState.imperial.height.ft}
                point="ft"
                actChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleHeightImperialFt(e)
                }
              />
              <InputCalc
                textLabel="Weight"
                placeholder="0"
                value={getState.imperial.weight.st}
                point="st"
                actChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleWeightImperialSt(e)
                }
              />
            </div>
            <div className={styles.imperialNest}>
              <InputCalc
                textLabel=""
                placeholder="0"
                value={getState.imperial.height.in}
                point="in"
                actChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleHeightImperialIn(e)
                }
              />
              <InputCalc
                textLabel=""
                placeholder="0"
                value={getState.imperial.weight.lbs}
                point="lbs"
                actChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleWeightImperialLbs(e)
                }
              />
            </div>
          </div>
        )}
      </>
      <Result />
    </div>
  )
}
