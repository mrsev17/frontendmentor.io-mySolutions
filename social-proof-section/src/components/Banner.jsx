import { MainInfo } from './MainInfo'
import { RateInfo } from './RateInfo'

export const Banner = () => {
  return (
    <section className="flex items-center h-[245px] lg:flex-col lg:gap-[39px] lg:h-full">
      <MainInfo />
      <RateInfo />
    </section>
  )
}
