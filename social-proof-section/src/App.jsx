import { Banner, Reviews } from './components'
import TopPattern from './assets/images/bg-pattern-top-desktop.svg'
import BottomPattern from './assets/images/bg-pattern-bottom-desktop.svg'

const App = () => {
  return (
    <div className="h-screen tablet:h-full flex lg:block lg:py-[82px] flex-col items-center justify-center max-w-main w-full mx-auto relative lg:max-w-[96%]">
      <img
        className="absolute top-0 left-0"
        src={TopPattern}
        alt="Top Pattern"
      />
      <div className="max-h-[580px] h-full max-w-content flex flex-col justify-between lg:gap-[49px] tablet:max-h-[100%]">
        <Banner />
        <Reviews />
      </div>
      <img
        className="absolute bottom-0 right-0 z-[-1]"
        src={BottomPattern}
        alt="Bottom Pattern"
      />
    </div>
  )
}

export default App
