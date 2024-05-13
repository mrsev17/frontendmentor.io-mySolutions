import { Networks } from './Networks'

export const PopoverMobile = ({ setOpen }) => {
  return (
    <div className="animate-fade absolute left-0 bottom-0 h-[58px] w-full bg-dark-xs rounded-b-[10px] px-8 py-[18px] flex justify-between items-center">
      <div className="flex gap-[21px]">
        <h3
          id="default-popover"
          className="font-medium text-dark-lg tracking-[5px]"
        >
          SHARE
        </h3>
        <Networks />
      </div>
      <button
        onClick={() => setOpen(false)}
        className="w-[32px] h-[32px] flex-col items-center rounded-full border-0 bg-transparent group focus:ring-0 focus:shadow-none"
      >
        <div className="w-[32px] h-[32px] rounded-full flex flex-col justify-center items-center cursor-pointer group bg-dark-md transition duration-500">
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13">
            <path
              fill="#FFFFFF"
              className="group-hover:fill-white duration-500"
              d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"
            />
          </svg>
        </div>
      </button>
    </div>
  )
}
