import { RateItem } from './RateItem'
import { rateData } from '../data/data'

export const RateInfo = () => {
  return (
    <div className="min-w-[540px] w-full h-[200px] flex flex-col justify-center items-center gap-4 lg:h-auto tablet:min-w-[100%]">
      {rateData.map(({ target, className }) => {
        return <RateItem key={target} target={target} className={className} />
      })}
    </div>
  )
}
