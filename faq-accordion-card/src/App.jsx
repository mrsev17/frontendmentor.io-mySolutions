import { ReactComponent as HeroDesktop } from './assets/images/illustration-woman-online-mobile.svg'
import { Accordion } from './components'

const App = () => {
  return (
    <div className="h-screen bg-gradient flex flex-col items-center justify-center w-full">
      <div className="shadow-custom max-w-content tablet:max-w-[90%] w-full h-[509px] tablet:h-auto bg-white rounded-[23px] pt-[65px] tablet:pt-[122px] flex tablet:flex-col justify-end relative bg-shadow-desktop bg-desktop-pos bg-no-repeat bg-100 pr-[95px] tablet:px-8 tablet:bg-shadow-mobile tablet:bg-237px tablet:bg-mobile-pos">
        <HeroDesktop className="w-[472px] h-[359px] absolute left-[-80px] tablet:hidden" />
        <HeroDesktop className="w-[237px] h-[180px] desktop:hidden absolute top-[-110px] left-1/2 transform -translate-x-1/2" />
        <div className="max-w-[350px] tablet:max-w-none w-full flex flex-col justify-center gap-[45px] mobile:items-center">
          <h1 className="text-32 leading-32 font-bold">FAQ</h1>
          <Accordion />
        </div>
      </div>
    </div>
  )
}

export default App
