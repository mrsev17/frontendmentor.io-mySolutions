import { PopoverDesktop } from './PopoverDesktop'
import Avatar from '../assets/images/avatar-michelle.jpg'

export const UserInfo = ({ setLinks, isMobile }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <img
          className="w-[40px] h-[40px] rounded-full"
          src={Avatar}
          alt="User"
        />
        <div className="flex flex-col">
          <h2 className="text-13 leading-5 font-bold text-dark-xs">
            Michelle Appleton
          </h2>
          <span className="text-13 leading-5 font-medium text-dark-lg">
            28 Jun 2020
          </span>
        </div>
      </div>
      <PopoverDesktop isMobile={isMobile} setLinks={setLinks} />
    </div>
  )
}
