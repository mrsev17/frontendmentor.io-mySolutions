import styles from './Limitations.module.scss'
import { CardLimitations } from '../CardLimitations'
import { limitationsData } from '../../utils/data'
import iconCurve from '../../assets/images/pattern-curved-line-right.svg'

export const Limitations = () => {
  return (
    <section className="nested-container">
      <div className={styles.limitations}>
        <div className={styles.limitationsTitle}>
          <div className={styles.limitationsTitleLeft}>
            <h5>Limitations of BMI</h5>
            <p>
              Although BMI is often a practical indicator of healthy weight, it
              is not suited for every person. Specific groups should carefully
              consider their BMI outcomes, and in certain cases, the measurement
              may not be beneficial to use.
            </p>
          </div>
          <div className={styles.limitationsTitleRight}>
            <CardLimitations
              title={limitationsData[0].title}
              text={limitationsData[0].text}
              img={limitationsData[0].img}
            />
          </div>
        </div>
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
      </div>
    </section>
  )
}
