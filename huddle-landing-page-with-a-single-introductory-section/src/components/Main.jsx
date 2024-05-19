import { MainInfo } from './MainInfo'
import HeroDesktop from '../assets/images/illustration-mockups.svg'

export const Main = () => {
  return (
    <section className="flex gap-[59px] mb-[27px] tablet:flex-col tablet:justify-center tablet:items-center tablet:mb-16">
      <img
        className="max-w-[696px] max-h-[493px] tablet:max-w-[296px] tablet:max-h-[174px]"
        src={HeroDesktop}
        alt="Hero Desktop"
      />
      <MainInfo />
    </section>
  )
}
