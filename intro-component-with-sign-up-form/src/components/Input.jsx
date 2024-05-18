import { ReactComponent as Error } from '../assets/images/icon-error.svg'

export const Input = ({
  handleInputChange,
  value,
  name,
  type,
  placeholder,
  error,
}) => {
  return (
    <div className={`flex flex-col`}>
      <div className="relative">
        <input
          onChange={handleInputChange}
          value={value}
          name={name}
          type={type}
          placeholder={placeholder}
          className={`${
            error ? 'border-salmon' : null
          } transition duration-500 focus:border-purple outline-none rounded-[5px] py-[14px] px-8 text-14 text-black leading-26 font-semibold border border-[#DEDEDE] w-full placeholder:text-black placeholder:opacity-75`}
        />
        {error && <Error className="absolute right-[27px] top-[16px]" />}
      </div>
      {error && (
        <div className="w-full flex justify-end">
          <span className="text-salmon text-11 font-medium leading-17">
            {error}
          </span>
        </div>
      )}
    </div>
  )
}
