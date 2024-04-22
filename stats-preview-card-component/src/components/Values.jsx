import { values } from '../data/data'

export const Values = () => {
  return (
    <ul className="flex max-lg:flex-col max-lg:justify-center gap-6 max-lg:text-center  lg:gap-16">
      {values.map((item) => {
        return (
          <li className="flex flex-col gap-0.5" key={item.title}>
            <h2 className="text-white text-[24px] font-bold leading-points">
              {item.value}
            </h2>
            <h3 className="text-white text-[12px] opacity-75 leading-text tracking-[1px] uppercase">
              {item.title}
            </h3>
          </li>
        )
      })}
    </ul>
  )
}
