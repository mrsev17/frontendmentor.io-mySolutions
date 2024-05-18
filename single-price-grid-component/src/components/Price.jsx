export const Price = () => {
  return (
    <main className="bg-ocean px-10 pt-10 pb-[39px] max-w-[317px] w-full rounded-bl-lg tablet:rounded-none tablet:max-w-[100%]">
      <h2 className="text-18 font-bold leading-21 text-white mb-[18px]">
        Monthly Subscription
      </h2>
      <h3 className="text-32 font-bold leading-37 text-white mb-1 flex items-center gap-[11px]">
        $29 <span className="text-[1rem] leading-26 opacity-50">per month</span>
      </h3>
      <span className="block text-white leading-26 mb-[26px] text-[15px]">
        Full access for less than $1 a day
      </span>
      <button className="hover:bg-opacity-50 transition duration-500 w-full font-bold leading-19 pt-[15px] pb-[14px] bg-green shadow-custom rounded-[5px] text-white">
        Sign Up
      </button>
    </main>
  )
}
