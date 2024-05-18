const mainInfo = {
  title: 'Learn to code by watching others',
  text: 'See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.',
}

export const MainInfo = () => {
  return (
    <div className="flex flex-col gap-[11px] tablet:text-center">
      <h1 className="text-50 leading-55 font-bold text-white tablet:text-28 tablet:leading-9">
        {mainInfo.title}
      </h1>
      <p className="leading-26 font-medium text-white max-w-[90%] tablet:max-w-[100%]">
        {mainInfo.text}
      </p>
    </div>
  )
}
