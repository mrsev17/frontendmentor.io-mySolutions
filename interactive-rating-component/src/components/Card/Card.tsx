import { useAppSelector } from '../../hooks'
import { Button } from '../Button'
import { CircleInfo } from '../CircleInfo'
import { RatingList } from '../RatingList'
import { ResultLabel } from '../ResultLabel'
import { SVGThankYou } from '../SVGThankYou'
import { TitleText } from '../TitleText'
import styles from './Card.module.css'

const titleContent = `How did we do?`
const textContent = `Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!`
const buttonText = `submit`

const titleSubmit = `Thank you!`
const textSubmit = `We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!`

export const Card: React.FC = () => {
  const getSubmitState = useAppSelector((state) => state.rating.submit)
  return (
    <div className={`${styles.card}`}>
      {!getSubmitState ? (
        <>
          <CircleInfo value={undefined} active={false} />
          <TitleText
            title={titleContent}
            text={textContent}
            textCenter={false}
          />
          <RatingList />
          <Button text={buttonText} />
        </>
      ) : (
        <div className="fade-in">
          <SVGThankYou />
          <ResultLabel />
          <TitleText title={titleSubmit} text={textSubmit} textCenter={true} />
        </div>
      )}
    </div>
  )
}
