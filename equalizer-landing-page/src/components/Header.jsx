import { Logo } from './SVGs/Logo'
import { BannerInfo } from './BannerInfo'

export const Header = () => {
  return (
    <header className="flex flex-col gap-[127px]">
      <Logo />
      <BannerInfo />
    </header>
  )
}
