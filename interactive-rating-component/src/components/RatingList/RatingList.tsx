import { CircleInfo } from '../CircleInfo'
import styles from './RatingList.module.css'

const listOptions = [1, 2, 3, 4, 5]

export const RatingList = () => {
  return (
    <ul className="flex justify-between mb-8">
      {listOptions.map((option: number) => {
        return (
          <li key={option}>
            <button className={styles.ratingBtn}>
              <CircleInfo value={option} />
            </button>
          </li>
        )
      })}
    </ul>
  )
}
