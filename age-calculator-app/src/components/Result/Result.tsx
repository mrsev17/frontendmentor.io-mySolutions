import styles from './Result.module.css'

export const Result = () => {
  return (
    <div className={styles.result}>
      <h2>
        <span>38</span>years
      </h2>
      <h2>
        <span>3</span>months
      </h2>
      <h2>
        <span>26</span>days
      </h2>
    </div>
  )
}
