export const Submit = () => {
  return (
    <div className="flex flex-col gap-2">
      <button
        className="py-[15px] text-15 font-semibold w-full bg-green text-white rounded-[5px] hover:bg-mint transition duration-500"
        type="submit"
      >
        CLAIM YOUR FREE TRIAL
      </button>
      <p className="text-11 font-medium leading-26 text-center text-[#BAB7D4]">
        By clicking the button, you are agreeing to our{' '}
        <a className="font-bold text-salmon" href="#">
          Terms and Services
        </a>
      </p>
    </div>
  )
}
