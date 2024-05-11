import { BackgroundImg, Header, MainContent } from './components'
import BgPattern from './assets/images/desktop/bg-pattern-dots.svg'

const App = () => {
  return (
    <div className="bg-dark h-screen">
      <div className="max-w-content h-[718px] relative mx-auto">
        <img
          className="absolute bottom-[-105px] right-0 z-10"
          src={BgPattern}
          alt=""
        />

        <div className="flex justify-center overflow-hidden">
          <div className="max-w-content w-full mt-[102px] min-h-[668px] flex flex-col justify-between relative">
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
