interface CustomOptionProps {
  id: string
  value: string
  label: string
  selectedOption: string
  setSelectedOption: (value: string) => void
}

export const CustomOption = ({
  id,
  value,
  label,
  selectedOption,
  setSelectedOption,
}: CustomOptionProps) => {
  return (
    <div
      className={`${
        selectedOption === value ? 'border-green bg-salad' : ''
      } flex items-center border border-mid-grey w-full rounded-lg py-4 px-[26px] gap-[14px] cursor-pointer h-[51px] transition duration-500`}
      onClick={() => setSelectedOption(value)}
    >
      <div
        className={`${
          selectedOption === value
            ? 'border-[2px] border-green rounded-full'
            : ''
        } grid place-items-center relative h-[20px] w-[20px]`}
      >
        <input
          type="radio"
          value={value}
          checked={selectedOption === value}
          onChange={() => setSelectedOption(value)}
          id={id}
          className={`${
            selectedOption === value ? 'border-green' : ''
          } border border-mid-grey rounded-full`}
        />

        <div
          className={`col-start-1 row-start-1 w-[10px] h-[10px] rounded-full transition duration-500 absolute ${
            selectedOption === value ? 'bg-green' : 'bg-transparent'
          }`}
        />
      </div>

      <label
        htmlFor={id}
        className="text-18 leading-150 text-grey cursor-pointer"
      >
        {label}
      </label>
    </div>
  )
}
