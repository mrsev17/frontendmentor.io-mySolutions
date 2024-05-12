import { stars } from '../data/data'

export const RateItem = ({ target, className }) => {
  return (
    <div className={`w-full ${className}`}>
      <div className="flex items-center gap-8 max-w-[445px] w-full bg-pink rounded-lg pl-8 py-[17px] tablet:max-w-[100%] tablet:flex-col tablet:gap-[15px] tablet:py-4">
        <ul className="flex gap-2 items-center">
          {stars.map((star, i) => (
            <li key={i}>{star}</li>
          ))}
        </ul>
        <span className="text-17 font-bold leading-4 text-purple mt-1.5">
          Rated 5 Stars in {target}
        </span>
      </div>
    </div>
  )
}
