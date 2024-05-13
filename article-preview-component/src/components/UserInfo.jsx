import { useState } from 'react'
import { Popover, ArrowContainer } from 'react-tiny-popover'
import Avatar from '../assets/images/avatar-michelle.jpg'
import { ReactComponent as Facebook } from '../assets/images/icon-facebook.svg'
import { ReactComponent as Twitter } from '../assets/images/icon-twitter.svg'
import { ReactComponent as Pinterest } from '../assets/images/icon-pinterest.svg'

const links = [
  {
    icon: <Facebook />,
    link: '#',
  },
  {
    icon: <Twitter />,
    link: '#',
  },
  {
    icon: <Pinterest />,
    link: '#',
  },
]

export const UserInfo = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false)
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
      <Popover
        isOpen={isPopoverOpen}
        positions={['top', 'bottom', 'left', 'right']}
        padding={16}
        content={({ position, childRect, popoverRect }) => (
          <ArrowContainer
            position={position}
            childRect={childRect}
            popoverRect={popoverRect}
            arrowColor={'#48556A'}
            arrowSize={12}
          >
            <div className="">
              <div className="popover-content">
                <div className="px-8 py-[18px] bg-dark-xs flex justify-between gap-[21px] rounded-[10px]">
                  <h3
                    id="default-popover"
                    className="font-medium text-dark-lg tracking-[5px]"
                  >
                    SHARE
                  </h3>
                  <ul className="flex items-center gap-[21px]">
                    {links.map(({ icon, link }, i) => {
                      return (
                        <li key={i}>
                          <a href={link}>{icon}</a>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </ArrowContainer>
        )}
      >
        <button
          onClick={() => setIsPopoverOpen(!isPopoverOpen)}
          className="w-[32px] h-[32px] flex-col items-center rounded-full border-0 bg-transparent group focus:ring-0 focus:shadow-none"
        >
          <div className="w-[32px] h-[32px] bg-sky rounded-full flex flex-col justify-center items-center cursor-pointer group hover:bg-dark-md transition duration-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13">
              <path
                fill="#6E8098"
                className="group-hover:fill-white duration-500"
                d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"
              />
            </svg>
          </div>
        </button>
      </Popover>
    </div>
  )
}
