import btnIcon from '../../assets/images/icon-arrow.svg'
import styles from './Submit.module.css'

export const Submit = () => {
  return (
    <div className={styles.submitWrap}>
      <div className={styles.greyLine}></div>
      <button className={styles.submitBtn}>
        <img src={btnIcon} alt="Arrow Button" />
      </button>
    </div>
  )
}
