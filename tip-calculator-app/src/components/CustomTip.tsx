import { useState } from 'react'

export const CustomTip = () => {
  const [custom, setCustom] = useState<string>('')

  const handleCustom = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value
    const sanitizedValue = inputValue.replace(/[^0-9]/g, '')
    if (sanitizedValue.length < 4) {
      setCustom(sanitizedValue)
    }
  }

  return (
    <input
      className="max-w-[117px] outline-none border-2 border-solid border-transparent text-right text-24 rounded-form bg-inputBg text-deepGreen leading-9 pt-[4px] pb-[4px] pr-[15px] w-full focus:border-lightMint transition-colors duration-300 ease-out"
      type="text"
      placeholder="Custom"
      value={custom}
      onChange={handleCustom}
    />
  )
}
