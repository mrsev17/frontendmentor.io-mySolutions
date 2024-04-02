import { BMICalculator } from './interfaces'

export const calculateBMI = (state: BMICalculator): void => {
  if (
    state.units === 'metric' &&
    state.metric.height > 100 &&
    state.metric.weight > 40
  ) {
    const getBmiMetric: number = +(
      state.metric.weight / Math.pow(state.metric.height / 100, 2)
    ).toFixed(1)
    state.metric.bmi = getBmiMetric
    if (getBmiMetric < 18.5) {
      state.metric.message = 'underweight'
      state.metric.recommendation = 'more than 63.3kgs'
    } else if (getBmiMetric >= 18.5 && getBmiMetric <= 24.9) {
      state.metric.message = 'healthy'
      state.metric.recommendation = 'between 63.3kgs - 85.2kgs'
    } else if (getBmiMetric >= 25 && getBmiMetric <= 29.9) {
      state.metric.message = 'overweight'
      state.metric.recommendation = 'between 85.2kgs - 102.4kgs'
    } else {
      state.metric.message = 'obese'
      state.metric.recommendation = 'less than 102.4kgs'
    }
  } else if (state.metric.height === 0 || state.metric.weight === 0) {
    state.metric.message = ''
    state.metric.bmi = 0
  }
}
