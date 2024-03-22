import { Button } from '../Button'
import { CircleInfo } from '../CircleInfo'
import { RatingList } from '../RatingList'
import { TitleText } from '../TitleText'
import styles from './Card.module.css'

const titleContent = `How did we do?`
const textContent = `Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!`
const buttonText = `submit`

export const Card = () => {
  return (
    <div className={`${styles.card}`}>
      <CircleInfo value={undefined} />
      <TitleText title={titleContent} text={textContent} />
      <RatingList />
      <Button text={buttonText} />
    </div>
  )
}
