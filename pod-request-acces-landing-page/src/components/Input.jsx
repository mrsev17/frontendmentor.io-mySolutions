import { useState } from 'react'

export const Input = () => {
  const [inputValue, setInputValue] = useState('')
  const [isValid, setIsValid] = useState(true)

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
    setIsValid(regex.test(inputValue))
    if (!isValid) {
      console.log('Email address submitted:', inputValue)
      setInputValue('')
    }
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex mobile:flex-col mobile:items-center mobile:gap-4"
      >
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Email address"
          maxLength={24}
          className="focus:outline-none text-14 leading-7 bg-xl-grey text-white py-3.5 px-7 max-w-[265px] mobile:max-w-[100%] w-full rounded-l-[28px] mobile:rounded-[28px] mobile:py-[9px]"
        />
        <div className="bg-xl-grey flex flex-col justify-center rounded-r-[28px] mobile:bg-transparent mobile:w-full ">
          <button className="text-14 leading-7 font-bold bg-mint text-dark px-[27px] py-[9px] rounded-[28px] mr-[5px] mobile:mr-0 placeholder-white hover:bg-xs-mint transition duration-500">
            Request Access
          </button>
        </div>
      </form>
      <span className="text-error text-12 leading-14 pl-7">
        {!isValid && 'Oops! Please check your email'}
      </span>
    </>
  )
}
