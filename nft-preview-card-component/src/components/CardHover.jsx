import View from '../assets/icon-view.svg'

export const CardHover = () => {
  return (
    <div className="h-full w-full max-h-[302px] max-w-[302px] absolute top-0 opacity-0 hover:opacity-100 transition duration-700">
      <div className="absolute inset-0 bg-toxicGreen opacity-50 rounded-lg"></div>
      <img
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        src={View}
        alt="View"
      />
    </div>
  )
}
