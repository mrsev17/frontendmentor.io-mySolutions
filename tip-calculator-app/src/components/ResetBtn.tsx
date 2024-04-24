import { useAppDispatch } from '../hooks/hooks'
import { calculateTip } from '../redux/tipCalculatorSlice'

export const ResetBtn = () => {
  const dispatch = useAppDispatch()

  return (
    <button
      onClick={() => dispatch(calculateTip())}
      className="uppercase bg-lightMint text-deepGreen text-20 w-full rounded-form pt-[9px] pb-[9px] hover:bg-mainBg transition-colors duration-300"
    >
      reset
    </button>
  )
}
