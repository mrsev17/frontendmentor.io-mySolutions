export const MainInfo = ({ title, text }) => {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-20 leading-7 font-bold text-dark-xs tablet:text-16 tablet:leading-6">
        {title}
      </h1>
      <p className="text-13 leading-5 font-medium text-dark-md">{text}</p>
    </div>
  )
}
