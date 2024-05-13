import { useState } from 'react'
import { Popover, ArrowContainer } from 'react-tiny-popover'
import { Networks } from './Networks'

export const PopoverDesktop = ({ isMobile, setLinks }) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false)
  return (
    <Popover
      isOpen={isPopoverOpen && !isMobile}
      positions={['top', 'bottom', 'left', 'right']}
      padding={16}
      onClickOutside={() => setIsPopoverOpen(false)}
      content={({ position, childRect, popoverRect }) => (
        <ArrowContainer
          position={position}
          childRect={childRect}
          popoverRect={popoverRect}
          arrowColor={'#48556A'}
          arrowSize={12}
        >
          <div className="popover-content animate-fade">
            <div className="px-8 py-[18px] bg-dark-xs flex justify-between gap-[21px] rounded-[10px]">
              <h3
                id="default-popover"
                className="font-medium text-dark-lg tracking-[5px] animate-fade"
              >
                SHARE
              </h3>
              <Networks />
            </div>
          </div>
        </ArrowContainer>
      )}
    >
      <button
        onClick={() => {
          setIsPopoverOpen(!isPopoverOpen)
          setLinks(true)
        }}
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
  )
}
