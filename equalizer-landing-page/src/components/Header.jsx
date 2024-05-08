import { Logo } from './SVGs/Logo'
import { BannerInfo } from './BannerInfo'

export const Header = () => {
  return (
    <header className="flex flex-col gap-[127px] mb-[108px] tablet:gap-[95px] iphone:gap-16 iphone:mb-[68px] max-w-content mx-auto px-4">
      <Logo />
      <BannerInfo />
    </header>
  )
}
