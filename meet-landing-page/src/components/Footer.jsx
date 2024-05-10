import { Btn } from './Btn'
import { Step } from './Step'

export const Footer = () => {
  return (
    <footer className="max-w-main bg-slate-400 bg-cover flex flex-col justify-center bg-footer-desktop tablet:bg-footer-tablet iphone:bg-footer-mobile bg-no-repeat relative">
      <div className="bg-deep-oceanic h-[308px] tablet:min-h-[428px] opacity-75"></div>
      <Step
        className="absolute top-[-110px] right-1/2 transform translate-x-1/2"
        step="02"
      />
      <div className="mx-auto max-w-[80%] tablet:flex-col m-auto flex justify-between items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
        <h3 className="text-44 leading-44 text-white font-black max-w-[28%] tablet:max-w-[75%] tablet:text-center iphone:text-32 mb-8">
          Experience more together
        </h3>
        <p className="text-18 font-medium leading-26 text-white max-w-[31%] tablet:mb-10 tablet:max-w-[100%] tablet:text-center">
          Stay connected with reliable HD meetings and unlimited one-on-one and
          group video sessions.
        </p>
        <Btn
          text="Download"
          span="v1.3"
          spanColor="text-light-purple"
          className="max-w-[193px] bg-deep-purple hover:bg-[#B18BDD]"
        />
      </div>
    </footer>
  )
}
