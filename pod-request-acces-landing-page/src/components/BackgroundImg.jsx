import HeroImg from '../assets/images/desktop/image-host.jpg'

export const BackgroundImg = () => {
  return (
    <div className="relative tablet:hidden">
      <img
        className="absolute right-0 top-[-80px]"
        src={HeroImg}
        alt="Hero Background"
      />
    </div>
  )
}
