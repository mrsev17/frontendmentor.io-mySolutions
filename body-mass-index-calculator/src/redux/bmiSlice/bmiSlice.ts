import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { BMICalculator } from '../../utils/interfaces'
import { calculateMetricBMI, calculateImperialBMI } from '../../utils/functions'

const initialState: BMICalculator = {
  units: 'metric',
  metric: {
    bmi: 0,
    height: 0,
    weight: 0,
    message: '',
    recommendation: '',
  },
  imperial: {
    bmi: 0,
    height: {
      ft: 0,
      in: 0,
    },
    weight: {
      st: 0,
      lbs: 0,
    },
    message: '',
    recommendation: '',
  },
}

const bmiSlice = createSlice({
  name: 'bmiCalculator',
  initialState,
  reducers: {
    setRestartCalculator() {
      return initialState
    },
    setUnits(state, action: PayloadAction<string>) {
      if (action.payload === 'metric') state.units = action.payload
      if (action.payload === 'imperial') state.units = action.payload
    },
    setMetricHeight(state, action: PayloadAction<string>) {
      if (state.units === 'metric') {
        state.metric.height = +action.payload
      }
      calculateMetricBMI(state)
    },
    setMetricWeight(state, action: PayloadAction<string>) {
      if (state.units === 'metric') {
        state.metric.weight = +action.payload
      }
      calculateMetricBMI(state)
    },
    // Imperial
    setImperialHeightFt(state, action: PayloadAction<string>) {
      if (state.units === 'imperial') {
        state.imperial.height.ft = +action.payload
      }
      calculateImperialBMI(state)
    },
    setImperialHeightIn(state, action: PayloadAction<string>) {
      if (state.units === 'imperial') {
        state.imperial.height.in = +action.payload
      }
      calculateImperialBMI(state)
    },
    setImperialWeightSt(state, action: PayloadAction<string>) {
      if (state.units === 'imperial') {
        state.imperial.weight.st = +action.payload
      }
      calculateImperialBMI(state)
    },
    setImperialWeightLbs(state, action: PayloadAction<string>) {
      if (state.units === 'imperial') {
        state.imperial.weight.lbs = +action.payload
      }
      calculateImperialBMI(state)
    },
  },
})

export const {
  setRestartCalculator,
  setUnits,
  setMetricHeight,
  setMetricWeight,
  setImperialHeightFt,
  setImperialHeightIn,
  setImperialWeightLbs,
  setImperialWeightSt,
} = bmiSlice.actions
export default bmiSlice.reducer
