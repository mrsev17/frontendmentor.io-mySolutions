import { BtnLink } from './BtnLink'
import { Android, IosIcon } from './SVGs'

export const PremiumEq = () => {
  return (
    <div className="pt-[58px] pl-[54px] pr-[59px] pb-12 max-w-[446px] rounded-xl bg-red">
      <div className="flex flex-col gap-[22px] mb-3">
        <h2 className="text-cream text-40 leading-52 font-bold">Premium EQ</h2>
        <p className="text-cream text-20 leading-34">
          Get expert-level control with a robust equalizer, volume mixer, and
          spatial audio. Take your listening experience to a whole new level and
          access all our incredible features!
        </p>
      </div>
      <h3 className="text-cream text-65 font-bold flex items-center gap-4 mb-7">
        $4 <span className="text-20 font-normal">/month</span>
      </h3>
      <div className="flex flex-col gap-4">
        <BtnLink color="black" device="IOS" icon={<IosIcon />} />
        <BtnLink color="white" device="Android" icon={<Android />} />
      </div>
    </div>
  )
}
