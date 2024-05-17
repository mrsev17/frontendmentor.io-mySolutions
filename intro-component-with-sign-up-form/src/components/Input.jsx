export const Input = ({
  inputValue,
  name,
  placeholder,
  type,
  handleInputChange,
  error,
}) => {
  return (
    <div>
      <input
        type={type}
        name={name}
        value={inputValue}
        onChange={handleInputChange}
        placeholder={placeholder}
        className="rounded-[10px] py-[15px] px-8 text-14 text-black leading-26 font-semibold border border-[#DEDEDE] w-full placeholder:text-black placeholder:opacity-75"
      />
      <span className="text-right">{error}</span>
    </div>
  )
}
