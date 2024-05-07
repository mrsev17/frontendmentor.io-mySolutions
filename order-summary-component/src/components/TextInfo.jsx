export const TextInfo = ({ title, text }) => {
  return (
    <div className="text-center mb-5">
      <h1 className="text-[28px] font-black leading-[37px] text-deep-blue mb-[17px] max-sm:text-[22px]">
        {title}
      </h1>
      <p className="max-w-[354px] m-auto text-easy-blue leading-[26px] max-sm:text-[15px]">
        {text}
      </p>
    </div>
  )
}
