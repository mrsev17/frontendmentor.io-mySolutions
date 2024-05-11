import { Logo } from './Logo'
import { Btn } from './Btn'
import { Banner } from './Banner'
import { bannerInfo } from '../data/data'

export const Header = () => {
  return (
    <div className="mb-[117px]">
      <Logo className="m-auto mt-20 mb-[61px] tablet:mt-12" />
      <header className="max-w-main m-auto overflow-hidden flex flex-col items-center iphone:mb-16">
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
    </div>
  )
}
