export const Step = ({ step, className }) => {
  return (
    <div className={`flex justify-center flex-col items-center ${className}`}>
      <div className="h-[84px] w-[1px] bg-[#87879D3F]"></div>
      <div className="h-[56px] w-[56px] leading-26 font-black bg-white text-dark-grey border border-[#87879D3F] flex flex-col justify-center items-center rounded-[29px]">
        {step}
      </div>
    </div>
  )
}
