import { useState, ReactNode } from 'react'

interface InputTipProps {
  children: ReactNode
  label: string
  placeholder: string
  value: string
  onChange: () => void
  className?: string
}

export const InputTip = ({
  children,
  label,
  placeholder,
  value,
  onChange,
}: InputTipProps) => {
  const [text, setText] = useState<string>('')
  const [error, setError] = useState<boolean>(false)
  const inputErrorStyle = error ? 'border-error' : 'border-transparent'

  const inputHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value
    const sanitizedValue = inputValue.replace(/[^0-9.]/g, '')
    if (sanitizedValue.length < 4) {
      setText(sanitizedValue)
    }
  }

  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex justify-between">
        <label className="text-lightGreen" htmlFor={label}>
          {label}
        </label>
        {error && <span className="text-error leading-6">Can’t be zero</span>}
      </div>
      <div className="relative">
        <input
          className={`${inputErrorStyle} outline-none border-2 border-solid text-right text-24 rounded-form bg-inputBg text-deepGreen leading-9 pt-[4px] pb-[4px] pr-[15px] w-full focus:border-lightMint transition-colors duration-300 ease-out`}
          id={label}
          name={label}
          type="text"
          placeholder={placeholder}
          value={text}
          onChange={inputHandle}
          autoComplete="off"
        />
        <span className="absolute transform -translate-y-1/2 left-[19px] top-1/2">
          {children}
        </span>
      </div>
    </div>
  )
}
