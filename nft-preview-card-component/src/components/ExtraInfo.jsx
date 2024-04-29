import { Price } from './Price'
import { Timer } from './Timer'

export const ExtraInfo = () => {
  return (
    <div className="flex justify-between mb-6">
      <Price />
      <Timer />
    </div>
  )
}
