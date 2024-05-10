export const Btn = ({ span, spanColor, text, className }) => {
  return (
    <button
      className={`py-4 w-full rounded-[29px] leading-26 font-black text-white transition duration-500 ${className}`}
    >
      {text} {span && <span className={spanColor}>{span}</span>}
    </button>
  )
}
