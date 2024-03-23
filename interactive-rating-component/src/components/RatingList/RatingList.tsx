import { useAppDispatch, useAppSelector } from '../../hooks'
import { CircleInfo } from '../CircleInfo'
import { setRating } from '../../redux/ratingSlice/ratingSlice'
import styles from './RatingList.module.css'

export const RatingList: React.FC = () => {
  const dispatch = useAppDispatch()
  const getOptions = useAppSelector((state) => state.rating.options)
  const getCurrentValue = useAppSelector((state) => state.rating.value)
  console.log(getCurrentValue)
  return (
    <ul className="flex justify-between mb-8">
      {getOptions.map((option: number) => {
        return (
          <li key={option}>
            <button
              className={`${styles.ratingBtn}`}
              onClick={() => dispatch(setRating(option))}
            >
              <CircleInfo value={option} active={option === getCurrentValue} />
            </button>
          </li>
        )
      })}
    </ul>
  )
}
