export const Course = ({ icon, title, text, link }) => {
  return (
    <li className="w-[350px] h-[322px] bg-white shadow-card rounded-[15px] pt-16 pl-8 relative tablet:h-[259px] tablet:w-[340px] iphone:w-full pb-10">
      <div className="absolute top-[-28px]">{icon}</div>
      <div className="flex flex-col gap-6 justify-between h-full tablet:gap-4">
        <h3 className="text-24 text-deepDark font-extrabold leading-[30px] tablet:text-20 tablet:leading-[25px]">
          {title}
        </h3>
        <p className="text-18 text-lightGrey leading-7 max-w-[90%] tablet:text-16 tablet:leading-[26px] tablet:max-w-[100%]">
          {text}
        </p>
        <a
          className="text-18 font-bold leading-7 text-pink transition duration-500 hover:text-lightPink"
          href={link}
        >
          Get started
        </a>
      </div>
    </li>
  )
}
