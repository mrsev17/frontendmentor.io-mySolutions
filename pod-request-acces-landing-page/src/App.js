import { BackgroundImg, Header, MainContent } from './components'
import BgPattern from './assets/images/desktop/bg-pattern-dots.svg'

const App = () => {
  return (
    <div className="flex justify-center bg-dark h-screen relative tablet:bg-tablet-hero mobile:bg-mobile-hero mobile:bg-cover tablet:bg-no-repeat tablet:bg-tablet-pos">
      <div className="mobile:bg-dark mobile:h-full mobile:w-full mobile:absolute mobile:opacity-70"></div>
      <div className="max-w-content w-full h-[718px] px-[39px] relative tablet:static">
        <img
          className="absolute bottom-[-105px] tablet:bottom-[0] tablet:left-[39px] right-0 z-10 mobile:hidden"
          src={BgPattern}
          alt="Background"
        />
        <div className="flex justify-center overflow-hidden">
          <div className="max-w-content w-full mt-[102px] tablet:mt-[50px] min-h-[668px] mobile:items-center tablet:min-h-[720px] mobile:min-h-full flex flex-col justify-between relative">
            <Header />
            <BackgroundImg />
            <MainContent />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
