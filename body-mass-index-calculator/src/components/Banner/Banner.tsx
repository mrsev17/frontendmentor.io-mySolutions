import { Calculator } from '../Calculator'
import styles from './Banner.module.scss'

export const Banner = () => {
  return (
    <section className={styles.banner}>
      <div className={`${styles.bannerWrapper} nested-container`}>
        <div className={styles.bannerLeft}>
          <h1>Body Mass Index Calculator</h1>
          <p>
            Better understand your weight in relation to your height using our
            body mass index (BM) calculator. While BMI is not the sole
            determinant of a healthy weight, it offers a valuable starting point
            to evaluate your overall health and well-being.
          </p>
        </div>
        <div className={styles.bannerRight}>
          <Calculator />
        </div>
      </div>
    </section>
  )
}
