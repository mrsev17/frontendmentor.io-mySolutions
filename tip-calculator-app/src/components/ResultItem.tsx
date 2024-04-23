interface ResultItemProps {
  title: string
  value: number
}

export const ResultItem = ({ title, value }: ResultItemProps) => {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex flex-col">
        <span className="text-white leading-6">{title}</span>
        <span className="text-sub leading-[19px]">/ person</span>
      </div>
      <span className="text-48 text-lightMint leading-[71px]">${value}</span>
    </div>
  )
}
