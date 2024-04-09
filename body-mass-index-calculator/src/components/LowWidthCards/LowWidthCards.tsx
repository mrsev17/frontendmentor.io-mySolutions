import { limitationsData } from '../../utils/data'
import { CardLimitations } from '../CardLimitations'
import styles from './LowWidthCards.module.scss'

export const LowWidthCards = () => {
  return (
    <ul className={styles.mobileCards}>
      {limitationsData.map((card) => {
        return (
          <li key={card.title}>
            <CardLimitations
              title={card.title}
              text={card.text}
              img={card.img}
            />
          </li>
        )
      })}
    </ul>
  )
}
