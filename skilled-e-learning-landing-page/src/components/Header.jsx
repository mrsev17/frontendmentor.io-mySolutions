import { Button, BannerContent } from '../components'
import { LogoDark } from './SVGs'

export const Header = () => {
  return (
    <header className="flex justify-between items-center flex-col mt-[38px] max-w-content w-full m-auto mb-[110px]">
      <nav className="flex justify-between items-center w-full">
        <LogoDark />
        <Button text="Get Started" purpose="header" />
      </nav>
      <BannerContent />
    </header>
  )
}
