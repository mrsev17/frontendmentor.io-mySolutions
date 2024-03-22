import { Star } from '../Star'
import styles from './CircleInfo.module.css'

interface CircleInfoProps {
  value: number | undefined
}

export const CircleInfo: React.FC<CircleInfoProps> = ({ value }) => {
  return (
    <div
      className={`${styles.circleInfo} ${
        value === undefined
          ? `w-12 h-12 p-4 rounded-full mb-8`
          : `rounded-full w-12 h-12 pt-3.5 p-4`
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
