import { ReactComponent as Arrow } from '../assets/images/icon-arrow-down.svg'

export const ItemFaq = ({ title, content, isOpen, onClick }) => {
  return (
    <li className="border-b-[1px] border-[#E8E8EA] pb-[18px]" onClick={onClick}>
      <div className="cursor-pointer group flex justify-between items-center">
        <h2
          className={`${
            isOpen ? 'font-bold leading-[14px]' : ''
          } group-hover:text-orange-400 transition duration-500 text-14 leading-17 text-[#4B4C5F]`}
        >
          {title}
        </h2>
        <Arrow
          className={`transition-transform transform ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
        />
      </div>
      {isOpen && <p className="pt-[18px] text-[12px] leading-18">{content}</p>}
    </li>
  )
}
