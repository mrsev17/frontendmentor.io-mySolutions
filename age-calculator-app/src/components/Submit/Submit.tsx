import btnIcon from '../../assets/images/icon-arrow.svg'
import { setCalculation } from '../../redux/ageCalculatorSlice/ageCalculatorSlice'
import { useAppDispatch } from '../../hooks'
import styles from './Submit.module.css'

export const Submit = () => {
  const dispatch = useAppDispatch()
  return (
    <div className={styles.submitWrap}>
      <div className={styles.greyLine}></div>
      <button
        onClick={() => dispatch(setCalculation())}
        className={styles.submitBtn}
      >
        <img src={btnIcon} alt="Arrow Button" />
      </button>
    </div>
  )
}
