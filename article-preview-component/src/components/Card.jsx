import { useState, useEffect } from 'react'
import { MainInfo } from './MainInfo'
import { UserInfo } from './UserInfo'
import { PopoverMobile } from './PopoverMobile'
import { dataMainInfo } from '../data/data'

export const Card = () => {
  const [open, setOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [isMobile])
  return (
    <section className="max-w-content w-full h-[280px] bg-white rounded-[10px] flex tablet:flex-col tablet:max-w-[490px] tablet:h-auto tablet:w-[94%] tablet:mt-12">
      <img
        className="max-w-[285px] max-h-[280px] h-full rounded-l-[10px] tablet:max-w-[100%] tablet:rounded-t-[10px] tablet:rounded-b-[0]"
        src={dataMainInfo.accentImage}
        alt="Draw"
      />
      <div className="py-8 px-10 tablet:pb-5 flex flex-col gap-5 relative">
        <MainInfo title={dataMainInfo.title} text={dataMainInfo.text} />
        <UserInfo setLinks={setOpen} isMobile={isMobile} />
        {open && isMobile && (
          // <div className="animate-fade absolute left-0 bottom-0 h-[58px] w-full bg-dark-xs rounded-b-[10px] px-8 py-[18px] flex justify-between items-center">
          //   <div className="flex gap-[21px]">
          //     <h3
          //       id="default-popover"
          //       className="font-medium text-dark-lg tracking-[5px]"
          //     >
          //       SHARE
          //     </h3>
          //     <Networks />
          //   </div>
          //   <button
          //     onClick={() => setOpen(false)}
          //     className="w-[32px] h-[32px] flex-col items-center rounded-full border-0 bg-transparent group focus:ring-0 focus:shadow-none"
          //   >
          //     <div className="w-[32px] h-[32px] rounded-full flex flex-col justify-center items-center cursor-pointer group bg-dark-md transition duration-500">
          //       <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13">
          //         <path
          //           fill="#FFFFFF"
          //           className="group-hover:fill-white duration-500"
          //           d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"
          //         />
          //       </svg>
          //     </div>
          //   </button>
          // </div>
          <PopoverMobile setOpen={setOpen} />
        )}
      </div>
    </section>
  )
}
