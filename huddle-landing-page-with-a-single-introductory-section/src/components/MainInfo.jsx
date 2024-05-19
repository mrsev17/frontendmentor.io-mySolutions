export const MainInfo = () => {
  return (
    <div className="flex flex-col gap-6 pt-8 tablet:items-center">
      <h1 className="text-40 leading-60 font-semibold text-white font-poppins max-w-[80%] tablet:text-24 tablet:leading-36 tablet:text-center">
        Build The Community Your Fans Will Love
      </h1>
      <p className="text-18 leading-27 text-white font-open-sans max-w-[98%] tablet:text-16 tablet:leading-24 tablet:text-center">
        Huddle re-imagines the way we build communities. You have a voice, but
        so does your audience. Create connections with your users as you engage
        in genuine discussion.
      </p>
      <button className="text-18 tablet:text-12 leading-27 text-purple bg-white pt-[13px] pb-[16px] tablet:pt-[7px] tablet:pb-[6px] shadow-custom max-w-[200px] w-full rounded-[28px] transition duration-500 hover:bg-pink hover:text-white">
        Register
      </button>
    </div>
  )
}
