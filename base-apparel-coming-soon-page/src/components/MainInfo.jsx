const mainInfo = {
  titleOne: "WE'RE",
  titleTwo: 'COMING SOON',
  text: "Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.",
}

export const MainInfo = () => {
  return (
    <>
      <h1 className="text-64 tracking-[17px] tablet:tracking-[10px] flex flex-col mb-6 tablet:text-[2.5rem] tablet:text-center tablet:leading-[42px]">
        <span className="text-dusty-rose leading-64 font-light">
          {mainInfo.titleOne}
        </span>
        <span className="text-brown leading-71 font-semibold">
          {mainInfo.titleTwo}
        </span>
      </h1>
      <p className="text-dusty-rose leading-7 max-w-[65%] mb-10 tablet:text-center tablet:mx-auto tablet:max-w-[96%]">
        {mainInfo.text}
      </p>
    </>
  )
}
