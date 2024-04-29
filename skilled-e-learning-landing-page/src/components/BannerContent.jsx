import { useState, useEffect } from 'react'
import { Button } from '../components'
import BannerHero from '../assets/image-hero-desktop@2x.webp'
import BannerHeroTablet from '../assets/image-hero-tablet@2x.webp'
import BannerHeroPhone from '../assets/image-hero-mobile.webp'

const bannerData = {
  title: 'Maximize skill, minimize budget',
  text: 'Our modern courses across a range of in-demand skills will give you the knowledge you need to live the life you want.',
}

export const BannerContent = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [screenWidth])

  return (
    <div className="flex w-full iphone:flex-col">
      <div className="w-6/12 h-[640px] flex flex-col justify-center tablet:h-[520px] iphone:w-full iphone:h-auto iphone:mb-4">
        <h1 className="text-56 font-extrabold leading-[71px] mb-[29px] tablet:text-40 tablet:leading-[50px] tablet:text-25">
          {bannerData.title}
        </h1>
        <p className="text-18 leading-7 text-lightGrey mb-10 tablet:text-16 tablet:leading-[26px]">
          {bannerData.text}
        </p>
        <Button text="Get Started" purpose="banner" />
      </div>
      <div className="w-6/12 iphone:w-full iphone:flex iphone:justify-center">
        {screenWidth > 768 && (
          <img
            className="max-w-[992px] max-h-[936px] absolute top-[-120px] right-[-300px] z-[-1]"
            src={BannerHero}
            alt="Hero"
          />
        )}
        {screenWidth > 567 && screenWidth < 769 && (
          <img
            className="max-w-[640px] max-h-[640px] absolute top-[30px] right-[-200px] z-[-1]"
            src={BannerHeroTablet}
            alt="Hero"
          />
        )}
        {screenWidth < 567 && (
          <img
            className="max-w-[360px] max-h-[301px]"
            src={BannerHeroPhone}
            alt="Hero"
          />
        )}
      </div>
    </div>
  )
}
