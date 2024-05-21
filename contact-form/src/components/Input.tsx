interface InputProps {
  target: string
  value: string
  htmlFor: string
  error: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({
  value,
  onChange,
  htmlFor,
  target,
  error,
}: InputProps) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label htmlFor={htmlFor} className="flex gap-2 text-grey leading-150">
        {target} <span className="text-green">*</span>
      </label>
      <input
        type="text"
        id={htmlFor}
        value={value}
        onChange={onChange}
        className={`${
          error ? 'border-red' : null
        } cursor-pointer outline-none border border-mid-grey rounded-lg py-3 px-5 focus:border-green hover:border-green transition duration-500 h-[51px]`}
      />
      {error && <span className="leading-150 text-red">{error}</span>}
    </div>
  )
}
