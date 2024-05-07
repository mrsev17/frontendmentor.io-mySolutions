import IconMusic from '../assets/icon-music.svg'

export const Plan = () => {
  return (
    <div className="flex justify-between items-center p-[25px] max-sm:p-4 bg-rise-blue rounded-[11px] mb-8 max-sm:mb-6">
      <div className="flex items-center gap-5">
        <img className="w-[48px] h-[48px]" src={IconMusic} alt="Music" />
        <div className="flex flex-col gap-1.5">
          <h2 className="font-black text-deep-blue leading-[21px] max-sm:text-[14px]">
            Annual Plan
          </h2>
          <span className="text-easy-blue leading-[21px] max-sm:text-[14px]">
            $59.99/year
          </span>
        </div>
      </div>
      <a
        className="underline text-[14px] max-sm:text-[13px] leading-[19px] text-dark-blue hover:text-light-purple hover:no-underline transition duration-500"
        href="#"
      >
        change
      </a>
    </div>
  )
}
