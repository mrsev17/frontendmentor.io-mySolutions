export const BtnLink = ({ color, icon, device }) => {
  const colorBtn = () => {
    if (color === 'white') return 'bg-cream text-dark hover:bg-orange'
    if (color === 'black') return 'bg-dark text-cream hover:bg-mint'
  }

  return (
    <button
      className={`${colorBtn()} transition duration-500 pt-[15px] pb-[14px] w-full rounded-lg text-18 font-bold leading-32 flex justify-center items-center gap-1 cursor-pointer`}
    >
      {icon} {device} Download
    </button>
  )
}
