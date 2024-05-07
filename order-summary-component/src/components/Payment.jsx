export const Payment = () => {
  return (
    <div className="flex flex-col gap-8">
      <button className="text-white bg-dark-blue py-[15px] rounded-[11px] font-black text-[15px] leading-5 shadow-custom hover:bg-light-purple transition duration-500">
        Proceed to Payment
      </button>
      <button className="text-easy-blue hover:text-deep-blue text-[15px] leading-5 font-black transition duration-500">
        Cancel Order
      </button>
    </div>
  )
}
