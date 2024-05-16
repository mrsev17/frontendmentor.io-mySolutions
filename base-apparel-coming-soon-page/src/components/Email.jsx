import { useState } from 'react'
import { ReactComponent as Arrow } from '../assets/images/icon-arrow.svg'
import { ReactComponent as Error } from '../assets/images/icon-error.svg'

export const Email = () => {
  const [inputValue, setInputValue] = useState('')
  const [isValid, setIsValid] = useState(true)

  const handleChange = (event) => {
    setInputValue(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
    setIsValid(regex.test(inputValue))
    if (!isValid) {
      console.log('Submitted mail:', inputValue)
      setInputValue('')
    }
  }

  return (
    <form
      className="flex flex-col gap-2 tablet:pb-[92px]"
      onSubmit={handleSubmit}
    >
      <div className="flex items-center relative max-w-[445px]">
        <label htmlFor="inputField"></label>
        <input
          className={`${
            !isValid
              ? 'border-error border-opacity-100 transition duration-500'
              : null
          } outline-none pt-[14px] pb-[12px] tablet:pt-[10px] tablet:pb-[8px] tablet:text-[14px] leading-7 bg-transparent border border-dusty-rose border-opacity-50 pl-8 text-brown placeholder:opacity-50 placeholder:text-dusty-rose placeholder:leading-7 rounded-[28px] max-w-[445px] w-full`}
          placeholder="Email Address"
          type="text"
          id="inputField"
          maxLength={28}
          value={inputValue}
          onChange={handleChange}
        />
        <div className="absolute right-0 flex items-center gap-[15px]">
          {!isValid && <Error className="animate-fade" />}
          <button
            className="z-10 py-[18px] tablet:py-[14px] bg-gradient-2 shadow-custom w-[101px] tablet:max-w-[4rem] flex justify-center rounded-[28px] hover:opacity-50 transition duration-500"
            type="submit"
          >
            <Arrow />
          </button>
        </div>
      </div>
      {!isValid && (
        <span className="text-error text-[13px] leading-7 pl-8 animate-fade">
          Please provide a valid email
        </span>
      )}
    </form>
  )
}
