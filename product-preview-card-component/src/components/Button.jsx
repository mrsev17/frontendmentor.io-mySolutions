import iconBtn from '../assets/icon-cart.svg'

export const Button = ({ text }) => {
  return (
    <button className="hover:bg-hover-green ease-in duration-300 flex justify-center gap-3 pt-[15px] pb-[16px] w-full bg-accent-green text-[#ffffff] font-['Montserrat'] text-[14px] leading-[17px] font-bold rounded-lg">
      <span>
        <img src={iconBtn} alt="Bracket" />
      </span>
      <span>{text}</span>
    </button>
  )
}
