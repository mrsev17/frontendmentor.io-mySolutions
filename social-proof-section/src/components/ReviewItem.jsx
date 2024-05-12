export const ReviewItem = ({ image, user, review, className }) => {
  return (
    <div className={`max-w-[350px] w-full ${className} lg:max-w-[100%]`}>
      <div className="flex flex-col gap-[31px]  h-[234px] bg-purple rounded-lg px-6 pt-10">
        <div className="flex item-center gap-[23px]">
          <img
            className="h-[40px] w-[40px] rounded-full"
            src={image}
            alt={user}
          />
          <div className="flex flex-col justify-center items-center gap-1">
            <h2 className="text-white text-17 leading-4 font-bold">{user}</h2>
            <span className="text-deep-pink text-17 leading-4">
              Verified Buyer
            </span>
          </div>
        </div>
        <p className="text-white text-17 font-medium leading-22">{review}</p>
      </div>
    </div>
  )
}
