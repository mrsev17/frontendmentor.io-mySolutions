import HeroImg from '../assets/images/desktop/image-host.jpg'

export const BackgroundImg = () => {
  return (
    <div className="relative tablet:hidden">
      <img
        className="absolute right-[-165px] top-[-26px]"
        src={HeroImg}
        alt="Hero Background"
      />
    </div>
  )
}
