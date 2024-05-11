import { Companies } from './Companies'
import { Input } from './Input'

export const MainContent = () => {
  return (
    <section className="w-[723px] h-[509px] bg-dark relative flex flex-col justify-end">
      <h1 className="text-white font-thin text-52 uppercase leading-62 mb-6">
        <span className="text-mint">publish your podcasts</span> everywhere.
      </h1>
      <p className="text-sm-grey text-18 max-w-[62%] leading-7 mb-10">
        Upload your audio to Pod with a single click. We’ll then distribute your
        podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket Casts and
        more!
      </p>
      <Input />
      <Companies />
    </section>
  )
}
