export const MainContainer = ({ children }) => {
  return (
    <div className="max-[567px]:py-0 w-full max-w-[600px] bg-[#FFFFFF] rounded-[10px] bg-[url] flex max-[567px]:flex-col max-[567px]:gap-6">
      {children}
    </div>
  )
}
