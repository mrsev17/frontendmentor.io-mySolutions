import { useState, useEffect } from 'react'
import styles from './Limitations.module.scss'
import { CardLimitations } from '../CardLimitations'
import { limitationsData } from '../../utils/data'
import { HighWidthCards } from '../HighWidthCards'
import { LowWidthCards } from '../LowWidthCards'

export const Limitations = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

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
          {windowWidth < 992 ? null : (
            <div className={styles.limitationsTitleRight}>
              <CardLimitations
                title={limitationsData[0].title}
                text={limitationsData[0].text}
                img={limitationsData[0].img}
              />
            </div>
          )}
        </div>
        {windowWidth < 992 ? <LowWidthCards /> : <HighWidthCards />}
      </div>
    </section>
  )
}
