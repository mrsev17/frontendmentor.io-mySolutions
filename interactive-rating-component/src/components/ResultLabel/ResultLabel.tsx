import { useAppSelector } from '../../hooks'
import styles from './ResultLabel.module.css'

export const ResultLabel: React.FC = () => {
  const getRating: number = useAppSelector((state) => state.rating.value)
  return (
    <div className={`${styles.resultLabel} text-center`}>
      <span>You selected {getRating} out of 5</span>
    </div>
  )
}
