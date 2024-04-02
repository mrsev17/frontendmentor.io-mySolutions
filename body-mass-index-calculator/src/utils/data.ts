import genderIcon from '../assets/images/icon-gender.svg'
import ageIcon from '../assets/images/icon-age.svg'
import muscleIcon from '../assets/images/icon-muscle.svg'
import pregnancyIcon from '../assets/images/icon-pregnancy.svg'
import raceIcon from '../assets/images/icon-race.svg'
import { Limitation } from './interfaces'

export const limitationsData: Limitation[] = [
  {
    img: genderIcon,
    title: 'Gender',
    text: "The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI.",
  },
  {
    img: ageIcon,
    title: 'Age',
    text: 'In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content.',
  },
  {
    img: muscleIcon,
    title: 'Muscle',
    text: "BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat.",
  },
  {
    img: pregnancyIcon,
    title: 'Pregnancy',
    text: 'Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child.',
  },
  {
    img: raceIcon,
    title: 'Race',
    text: 'Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse.',
  },
]
