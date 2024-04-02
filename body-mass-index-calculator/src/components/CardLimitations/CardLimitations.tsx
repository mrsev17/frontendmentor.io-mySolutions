import styles from './CardLimitations.module.scss'

interface LimitationsData {
  title: string
  text: string
  img: string
}

export const CardLimitations: React.FC<LimitationsData> = ({
  text,
  title,
  img,
}) => {
  return (
    <div className={styles.cardLimitations}>
      <div className={styles.cardLimitationsTitle}>
        <img src={img} alt={`Art of ${title}`} />
        <h6>{title}</h6>
      </div>
      <p>{text}</p>
    </div>
  )
}
