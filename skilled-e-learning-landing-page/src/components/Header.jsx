import { Button, BannerContent } from '../components'
import { LogoDark } from './SVGs'

export const Header = () => {
  return (
    <section className="max-w-main w-full m-auto overflow-hidden relative min-h-[820px] tablet:px-[39px] tablet:min-h-[520px] iphone:px-4">
      <header className="flex justify-between items-center flex-col mt-[38px] iphone:mt-4 max-w-content w-full m-auto tablet:mb-[80px] iphone:mb-4">
        <nav className="flex justify-between items-center w-full iphone:mb-8">
          <LogoDark />
          <Button text="Get Started" purpose="header" />
        </nav>
        <BannerContent />
      </header>
    </section>
  )
}
