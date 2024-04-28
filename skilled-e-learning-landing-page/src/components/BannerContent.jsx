import { Button } from '../components'
import BannerHero from '../assets/image-hero-desktop@2x.webp'

const bannerData = {
  title: 'Maximize skill, minimize budget',
  text: 'Our modern courses across a range of in-demand skills will give you the knowledge you need to live the life you want.',
}

export const BannerContent = () => {
  return (
    <div className="flex w-full">
      <div className="w-6/12 h-[640px] flex flex-col justify-center">
        <h1 className="text-56 font-extrabold leading-[71px] mb-[29px]">
          {bannerData.title}
        </h1>
        <p className="text-18 leading-7 text-lightGrey mb-10">
          {bannerData.text}
        </p>
        <Button text="Get Started" purpose="banner" />
      </div>
      <div className="w-6/12">
        <img
          className="max-w-[992px] max-h-[936px] absolute top-[-120px] right-[-300px]"
          src={BannerHero}
          alt="Hero"
        />
      </div>
    </div>
  )
}
