import { useAppDispatch } from '../../hooks'
import { setSubmit } from '../../redux/ratingSlice/ratingSlice'
import styles from './Button.module.css'

interface ButtonProps {
  text: string
}

export const Button: React.FC<ButtonProps> = ({ text }) => {
  const dispatch = useAppDispatch()
  return (
    <button
      className={`${styles.Button} uppercase font-bold text-neutral-50 hover:bg-neutral-50 w-full`}
      onClick={() => dispatch(setSubmit())}
    >
      {text}
    </button>
  )
}
