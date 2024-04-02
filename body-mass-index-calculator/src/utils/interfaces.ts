export interface BMICalculator {
  units: 'metric' | 'imperial'
  metric: {
    bmi: number
    height: number
    weight: number
    message: string
    recommendation: string
  }
  imperial: {
    bmi: number
    height: {
      ft: number
      in: number
    }
    weight: {
      st: number
      lbs: number
    }
    message: string
    recommendation: string
  }
}
