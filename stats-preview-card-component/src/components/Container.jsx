export const Container = ({ children }) => {
  return (
    <div className="bg-card max-lg:gap-10 w-full max-w-[1110px] rounded-lg flex xxs:flex-col-reverse lg:flex-row justify-between">
      {children}
    </div>
  )
}
