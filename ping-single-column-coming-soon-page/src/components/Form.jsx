import { useState } from 'react'

export const Form = () => {
  const [inputValue, setInputValue] = useState('')
  const [error, setError] = useState(false)

  const handleChange = (event) => {
    setInputValue(event.target.value)
  }

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (validateEmail(inputValue)) {
      console.log(inputValue)
      setError(false)
      setInputValue('')
    } else {
      setError(true)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      action="submit"
      className="flex flex-col justify-between gap-[6px] max-w-[640px] w-full h-[80px] tablet:h-auto mb-[68px] tablet:mb-[72px]"
    >
      <div className="flex justify-between gap-4 tablet:flex-col tablet:gap-[10px]">
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Your email address…"
          className={`${
            error ? '!border-red' : ''
          } transition duration-500 outline-none border border-sky max-w-[421px] tablet:max-w-[100%] w-full rounded-[28px] leading-20 text-black py-[18px] px-[30px] placeholder:text-sky`}
        />
        <button
          type="submit"
          className="max-w-[200px] tablet:max-w-[100%] w-full border border-blue pt-[19px] pb-[18px] rounded-[28px] text-white bg-blue leading-19 font-semibold hover:bg-opacity-75 transition duration-500"
        >
          Notify Me
        </button>
      </div>
      {error && (
        <span className="pl-[30px] text-12 leading-20 text-red animate-fade">
          Please provide a valid email address
        </span>
      )}
    </form>
  )
}
