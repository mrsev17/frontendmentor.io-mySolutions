import { Star } from '../Star'
import styles from './CircleInfo.module.css'

interface CircleInfoProps {
  value: number | undefined
  active: boolean
}

export const CircleInfo: React.FC<CircleInfoProps> = ({ value, active }) => {
  return (
    <div
      className={`${styles.circleInfo} ${
        value === undefined
          ? `w-12 h-12 p-4 rounded-full mb-8`
          : `rounded-full w-10 h-10 sm:w-12 sm:h-12 pt-2.5 sm:pt-3.5 p-4 ${
              active ? styles.activeRating : null
            }`
      }`}
    >
      {value === undefined ? (
        <Star />
      ) : (
        <span className="font-bold text-base">{value}</span>
      )}
    </div>
  )
}
