import { CardLimitations } from '../CardLimitations'
import { limitationsData } from '../../utils/data'
import iconCurve from '../../assets/images/pattern-curved-line-right.svg'
import styles from './HighWidthCards.module.scss'

export const HighWidthCards = () => {
  return (
    <>
      <div className={styles.limitationsMid}>
        <div className={styles.limitationsMidCurve}>
          <img src={iconCurve} alt="Curve" />
        </div>
        <CardLimitations
          title={limitationsData[1].title}
          text={limitationsData[1].text}
          img={limitationsData[1].img}
        />
        <CardLimitations
          title={limitationsData[2].title}
          text={limitationsData[2].text}
          img={limitationsData[2].img}
        />
      </div>
      <div className={styles.limitationsBottom}>
        <CardLimitations
          title={limitationsData[3].title}
          text={limitationsData[3].text}
          img={limitationsData[3].img}
        />
        <CardLimitations
          title={limitationsData[4].title}
          text={limitationsData[4].text}
          img={limitationsData[4].img}
        />
      </div>
    </>
  )
}
