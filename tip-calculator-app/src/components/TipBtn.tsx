import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { setTip } from '../redux/tipCalculatorSlice'

interface TipBtnProps {
  value: number
}

export const TipBtn = ({ value }: TipBtnProps) => {
  const dispatch = useAppDispatch()
  const getCurrentTip = useAppSelector((state) => state.calculatorTip.selectTip)
  const styles =
    getCurrentTip === value
      ? 'bg-lightMint text-deepGreen'
      : 'bg-deepGreen text-white'

  return (
    <li>
      <button
        onClick={() => dispatch(setTip(value))}
        className={`${styles} max-w-[117px] w-full text-24 leading-9 pt-[6px] pb-[6px] rounded-form transition-colors duration-500 ease-out`}
      >
        {value}%
      </button>
    </li>
  )
}
