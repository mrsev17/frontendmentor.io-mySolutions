export const Course = ({ icon, title, text, link }) => {
  return (
    <li className="w-[350px] h-[322px] shadow-card rounded-[15px] pt-16 pl-8 relative">
      <div className="absolute top-[-28px]">{icon}</div>
      <div className="flex flex-col gap-6">
        <h3 className="text-24 text-deepDark font-extrabold leading-[30px]">
          {title}
        </h3>
        <p className="text-18 text-lightGrey leading-7 max-w-[90%]">{text}</p>
        <a
          className="text-18 font-bold text-pink transition duration-500 hover:text-lightPink"
          href={link}
        >
          Get started
        </a>
      </div>
    </li>
  )
}
