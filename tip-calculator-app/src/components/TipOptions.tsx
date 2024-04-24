import { useAppSelector } from '../hooks/hooks'
import { CustomTip } from './CustomTip'
import { TipBtn } from './TipBtn'

const tipOptions = [5, 10, 15, 25, 50]

export const TipOptions = () => {
  const getCustomError: string = useAppSelector(
    (state) => state.calculatorTip.selectTip.error
  )

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between">
        <span className="text-lightGreen leading-6">Select Tip %</span>
        {getCustomError && (
          <span className="text-error leading-6">{getCustomError}</span>
        )}
      </div>
      <div className="grid">
        <ul className="grid grid-cols-3 gap-3.5 max-lg:grid-cols-2">
          {tipOptions.map((tip, i) => {
            return <TipBtn key={tip} value={tip} />
          })}
          <li>
            <CustomTip />
          </li>
        </ul>
      </div>
    </div>
  )
}
