import { Companies } from './Companies'
import { Input } from './Input'

export const MainContent = () => {
  return (
    <section className="w-[723px] mobile:w-auto h-[509px] mobile:h-auto bg-dark mobile:bg-transparent relative flex flex-col justify-end tablet:max-w-[635px]">
      <h1 className="text-white font-thin text-52 tablet:text-48 tablet:leading-56 uppercase leading-62 mobile:leading-38 mb-6 mobile:text-center mobile:text-26">
        <span className="text-mint">publish your podcasts</span> everywhere.
      </h1>
      <p className="text-sm-grey text-18 max-w-[62%] leading-7 mb-10 tablet:max-w-[70%] mobile:max-w-[90%] mobile:text-center mobile:mx-auto mobile:mb-[33px]">
        Upload your audio to Pod with a single click. We’ll then distribute your
        podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket Casts and
        more!
      </p>
      <div className="flex flex-col gap-[42px] mobile:flex-col-reverse">
        <Input />
        <Companies />
      </div>
    </section>
  )
}
