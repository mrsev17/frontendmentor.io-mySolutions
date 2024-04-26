import { useAppDispatch } from '../hooks/hooks'
import { fetchAdvice } from '../redux/adviceSlice'
import { IconDice } from './SVGs'

export const BtnAdvice = () => {
  const dispatch = useAppDispatch()
  return (
    <button
      onClick={() => dispatch(fetchAdvice())}
      className="absolute left-1/2 bottom-[-32px] transform -translate-x-1/2 w-16 h-16 bg-neonGreen flex flex-col justify-center items-center rounded-full hover:shadow-custom transition duration-500"
    >
      <IconDice />
    </button>
  )
}
