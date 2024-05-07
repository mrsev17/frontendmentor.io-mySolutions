import { setBg, setColor } from '../utils/functions'

export const Card = ({ icon, title, text, link, index }) => {
  return (
    <li
      className={`${setBg(title)} p-12 ${
        index === 2
          ? 'rounded-r-lg max-sm:rounded-r-none max-sm:!rounded-b-lg'
          : ''
      } ${
        index === 0
          ? 'rounded-l-lg max-sm:rounded-l-none max-sm:!rounded-t-lg'
          : ''
      }`}
    >
      <div className="mb-[35px]">{icon}</div>
      <h2 className="font-bsd font-bold leading-10 uppercase text-[2.5rem] mb-[25px] text-[#F2F2F2]">
        {title}
      </h2>
      <p className="font-ld leading-6 text-[15px] mb-[103px] max-sm:mb-[25px] text-[#F2F2F2]">
        {text}
      </p>
      <a
        className={`transition duration-500 border-2 border-[#F2F2F2] border-solid hover:bg-transparent hover:text-[#F2F2F2] font-ld text-[15px] leading-[25px] pt-[11px] pb-[10px] max-w-[146px] w-full bg-[#F2F2F2] block text-center rounded-3xl ${setColor(
          title
        )}`}
        href={link}
      >
        Learn More
      </a>
    </li>
  )
}
