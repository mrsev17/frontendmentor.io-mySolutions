import iconCurve from '../../assets/images/pattern-curved-line-left.svg'
import meansPic from '../../assets/images/image-man-eating.webp'
import styles from './Means.module.scss'

export const Means = () => {
  return (
    <section className={`${styles.means} container`}>
      <div className={`${styles.meansWrapper} nested-container`}>
        <img className={styles.iconCurve} src={iconCurve} alt="Curve Icon" />
        <img src={meansPic} alt="Man eating" />
        <div>
          <h2>What your BMI result means</h2>
          <p>
            A BMI range of 18.5 to 24.9 is considered a 'healthy weight.'
            Maintaining a healthy weight may lower your chances of experiencing
            health issues later on, such as obesity and type 2 diabetes. Aim for
            a nutritious diet with reduced fat and sugar content, incorporating
            ample fruits and vegetables. Additionally, strive for regular
            physical activity, ideally about 30 minutes daily for five days a
            week.
          </p>
        </div>
      </div>
    </section>
  )
}
