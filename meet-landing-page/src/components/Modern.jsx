import { modernInfo } from '../data/data'

export const Modern = () => {
  return (
    <section className="flex flex-col items-center mb-[180px] max-w-main justify-center tablet:mx-4 m-auto">
      <div className="max-w-sm-content m-auto">
        <span className="block text-center leading-26 font-black text-deep-oceanic tracking-[4px] uppercase mb-4">
          {modernInfo.sub}
        </span>
        <h2 className="m-auto text-40 leading-44 font-black text-dark text-center max-w-[80%] mb-[34px] iphone:text-32 iphone:leading-36 iphone:mb-6">
          {modernInfo.title}
        </h2>
        <p className="text-18 leading-26 text-center text-dark-grey font-medium">
          {modernInfo.text}
        </p>
      </div>
    </section>
  )
}
