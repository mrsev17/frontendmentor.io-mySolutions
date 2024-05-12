import { ReactComponent as Star } from '../assets/images/icon-star.svg'
import Colton from '../assets/images/image-colton.jpg'
import Irene from '../assets/images/image-irene.jpg'
import Anne from '../assets/images/image-anne.jpg'

export const reviewsData = [
  {
    className: '',
    image: Colton,
    user: 'Colton Smith',
    review:
      '“ We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent! ”',
  },
  {
    className: 'flex flex-col justify-center',
    image: Irene,
    user: 'Irene Roberts',
    review:
      '“ Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery.”',
  },
  {
    className: 'flex flex-col justify-end',
    image: Anne,
    user: 'Anne Wallace',
    review:
      '“ Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone! ”',
  },
]

export const stars = Array(5).fill(<Star />)

export const mainInfo = {
  title: '10,000+ of our users love our products.',
  text: 'We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our services.',
}

export const rateData = [
  {
    target: 'Reviews',
    className: '',
  },
  {
    target: 'Report Guru',
    className: 'flex justify-center tablet:justify-start',
  },
  {
    target: 'BestTech',
    className: 'flex justify-end tablet:justify-start',
  },
]
