export const Card = ({ title, text, icon, color }) => {
  return (
    <div className="shadow-card">
      <div className={`max-w-card w-full h-[4px] rounded-t-lg ${color}`}></div>
      <div className="max-w-card h-[246px] bg-white rounded-b-lg p-9 flex flex-col justify-between items-end">
        <div className="flex flex-col gap-[6px]">
          <h2 className="text-20 font-semibold leading-30 text-black">
            {title}
          </h2>
          <p className="text-13 leading-23 text-black opacity-50">{text}</p>
        </div>
        {icon}
      </div>
    </div>
  )
}
