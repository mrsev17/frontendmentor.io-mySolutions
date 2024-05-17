import { ReactComponent as Logo } from './assets/images/logo.svg'
import { Email } from './components/Email'
import { MainInfo } from './components/MainInfo'
import HeroDesktop from './assets/images/hero-desktop.jpg'
import HeroMobile from './assets/images/hero-mobile.jpg'

const App = () => {
  return (
    <div className="h-screen tablet:h-full bg-card-2 flex flex-col justify-center items-center">
      <section className="max-w-main w-full h-[800px] tablet:h-auto flex justify-between bg-pattern-desktop tablet:flex-col tablet:bg-none">
        <div className="pl-[165px] tablet:px-[34px] pt-16 tablet:pt-[34px] flex flex-col gap-[136px] tablet:gap-0">
          <Logo className="tablet:mb-12" />
          <img
            className="mb-[78px] scale-[1.2] desktop:hidden"
            src={HeroMobile}
            alt="Hero"
          />
          <div>
            <MainInfo />
            <Email />
          </div>
        </div>
        <img
          className="max-w-[610px] max-h-[800px] tablet:hidden"
          src={HeroDesktop}
          alt="Hero Desktop"
        />
      </section>
    </div>
  )
}

export default App
