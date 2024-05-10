import HeroLeft from '../assets/images/desktop/image-hero-left.png'
import HeroRight from '../assets/images/desktop/image-hero-right.png'

export const Banner = ({ title, text }) => {
  return (
    <div className="relative flex m-auto w-full">
      <img
        className="absolute right-[-36px] xl:right-0"
        src={HeroLeft}
        alt="Hero Left"
      />
      <div className="max-w-sm-content m-auto">
        <h1 className="text-64 leading-64 text-dark text-center font-black max-w-[80%] m-auto mb-[34px]">
          {title}
        </h1>
        <p className="text-18 leading-26 text-dark-grey text-center font-medium mb-8">
          {text}
        </p>
      </div>
      <img
        className="absolute left-[-36px] z-[-1] xl:left-0"
        src={HeroRight}
        alt="Hero Right"
      />
    </div>
  )
}
