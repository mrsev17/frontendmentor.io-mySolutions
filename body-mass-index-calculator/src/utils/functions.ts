import { BMICalculator } from './interfaces'

export const calculateMetricBMI = (state: BMICalculator): void => {
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

export const calculateImperialBMI = (state: BMICalculator): void => {
  if (
    state.units === 'imperial' &&
    state.imperial.height.ft > 3 &&
    state.imperial.height.in > 5 &&
    state.imperial.weight.st > 3 &&
    state.imperial.weight.lbs > 3
  ) {
    const heightInInches: number =
      state.imperial.height.ft * 12 + state.imperial.height.in
    const weightInPounds: number =
      state.imperial.weight.st * 14 + state.imperial.weight.lbs

    const getBMIImperial: number = +(
      (weightInPounds / (heightInInches * heightInInches)) *
      703
    ).toFixed(1)
    state.imperial.bmi = getBMIImperial

    if (getBMIImperial < 18.5) {
      state.imperial.message = 'underweight'
      state.imperial.recommendation = 'more than 9 st 6 lbs'
    } else if (getBMIImperial >= 18.5 && getBMIImperial <= 24.9) {
      state.imperial.message = 'healthy'
      state.imperial.recommendation = 'between 9 st 6 lbs - 12 st 10 lbs'
    } else if (getBMIImperial >= 25 && getBMIImperial <= 29.9) {
      state.imperial.message = 'overweight'
      state.imperial.recommendation = 'between 12 st 10 lbs - 15 st 4 lbs'
    } else {
      state.imperial.message = 'obese'
      state.imperial.recommendation = 'less than 15 st 4 lbs'
    }
  } else if (
    state.imperial.height.ft === 0 ||
    state.imperial.height.in === 0 ||
    state.imperial.weight.st === 0 ||
    state.imperial.weight.lbs === 0
  ) {
    state.imperial.message = ''
    state.imperial.bmi = 0
  }
}
