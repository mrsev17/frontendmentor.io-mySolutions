import { Logo } from './Logo'
import { Btn } from './Btn'
import { Banner } from './Banner'

const bannerInfo = {
  title: 'Group Chat for Everyone',
  text: '  Meet makes it easy to connect with others face-to-face virtually and collaborate across any device.',
}

export const Header = () => {
  return (
    <>
      <Logo className="m-auto mt-20 mb-[61px] tablet:mt-12" />
      <header className="max-w-main m-auto overflow-hidden flex flex-col items-center mb-[110px] iphone:mb-16">
        <Banner title={bannerInfo.title} text={bannerInfo.text} />
        <div className="flex justify-center gap-4 w-full iphone:flex-col iphone:items-center">
          <Btn
            className="bg-deep-oceanic max-w-[193px] hover:bg-[#71C0D4]"
            text="Download"
            span="v1.3"
            spanColor="text-light-oceanic"
          />
          <Btn
            className="bg-deep-purple max-w-[139px] hover:bg-[#B18BDD]"
            text="What is it?"
          />
        </div>
      </header>
    </>
  )
}
