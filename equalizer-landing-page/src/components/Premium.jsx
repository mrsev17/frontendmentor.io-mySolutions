import { PremiumEq } from './PremiumEq'
import ImageApp from '../assets/illustration-app.png'

export const Premium = () => {
  return (
    <section className="relative h-[930px] tablet:h-[850px] iphone:h-[1024px] z-10 mb-[87px] max-w-content mx-auto px-4 iphone:max-w-none iphone:px-0">
      <div className="z-[-1] h-[600px] w-full bg-dark rounded-lg bg-premium bg-no-repeat bg-40-0 absolute bottom-[110px] iphone:bottom-auto iphone:top-[100px]"></div>
      <div className="px-[102px] tablet:px-16 flex justify-between iphone:px-0 iphone:justify-center">
        <img
          className="max-w-[312px] max-h-[642px] tablet:max-w-[270px] tablet:max-h-[556px] iphone:max-w-[208px] iphone:max-h-[430px]"
          src={ImageApp}
          alt="App"
        />
        <div className="absolute right-[95px] tablet:right-[64px] bottom-0 iphone:right-0 iphone:w-full">
          <PremiumEq />
        </div>
      </div>
    </section>
  )
}
