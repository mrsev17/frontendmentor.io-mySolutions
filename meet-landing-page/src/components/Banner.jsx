import HeroLeft from '../assets/images/desktop/image-hero-left.png'
import HeroRight from '../assets/images/desktop/image-hero-right.png'

export const Banner = ({ title, text }) => {
  return (
    <div className="relative flex m-auto w-full tablet:mb-8">
      <img
        className="absolute right-[-36px] z-[-1] xl:right-0 md:max-w-[320px] iphone:max-w-[240px] sm-iphone:max-w-[220px]"
        src={HeroRight}
        alt="Hero Left"
      />
      <div className="max-w-sm-content m-auto md:mt-[20rem] iphone:mt-[14rem]">
        <h1 className="text-64 leading-64 text-dark text-center font-black max-w-[80%] m-auto mb-[34px] tablet:mb-6 tablet:max-w-[60%] tablet:text-48 tablet:leading-48 iphone:text-40 iphone:leading-[44px]">
          {title}
        </h1>
        <p className="text-18 leading-26 text-dark-grey text-center font-medium mb-8 tablet:max-w-[80%] tablet:m-auto tablet:text-[1rem]">
          {text}
        </p>
      </div>
      <img
        className="absolute left-[-36px] z-[-1] xl:left-0 md:max-w-[320px] iphone:max-w-[240px] sm-iphone:max-w-[220px]"
        src={HeroLeft}
        alt="Hero Right"
      />
    </div>
  )
}
