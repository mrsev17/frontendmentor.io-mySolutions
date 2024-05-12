import { mainInfo } from '../data/data'

export const MainInfo = () => {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-56 font-bold leading-48 text-purple tracking-[-2px] max-w-[70%] tablet:text-center tablet:max-w-max tablet:text-40 tablet:leading-8">
        {mainInfo.title}
      </h1>
      <p className="text-19 font-medium leading-25 text-violet max-w-[75%] tablet:max-w-[100%] tablet:text-center">
        {mainInfo.text}
      </p>
    </div>
  )
}
