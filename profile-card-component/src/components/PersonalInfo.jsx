export const PersonalInfo = ({ user, age, location }) => {
  return (
    <div className="text-center flex flex-col gap-2 mb-7">
      <h1 className="text-18 font-bold leading-18 text-dark flex justify-center gap-2">
        {user}
        <span className="leading-22 text-grey font-normal block mt-[3px]">
          {age}
        </span>
      </h1>
      <h2 className="text-14 leading-17 text-grey">{location}</h2>
    </div>
  )
}
