import { setCustomTip } from '../redux/tipCalculatorSlice'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'

export const CustomTip = () => {
  const dispatch = useAppDispatch()

  const getCustomTip: string = useAppSelector(
    (state) => state.calculatorTip.selectTip.custom
  )

  const handleCustom = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value
    const sanitizedValue = inputValue.replace(/[^0-9]/g, '')
    if (sanitizedValue.length < 4 && +sanitizedValue[0] !== 0) {
      dispatch(setCustomTip(sanitizedValue))
    }
  }

  return (
    <input
      className="max-w-[117px] max-lg:max-w-full outline-none border-2 border-solid border-transparent text-right text-24 rounded-form bg-inputBg text-deepGreen leading-9 pt-[4px] pb-[4px] pr-[15px] w-full focus:border-lightMint transition-colors duration-300 ease-out"
      type="text"
      placeholder="Custom"
      value={getCustomTip}
      onChange={handleCustom}
    />
  )
}
