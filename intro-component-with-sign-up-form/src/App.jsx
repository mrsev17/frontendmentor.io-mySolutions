import React, { useState } from 'react'
import { Input } from './components/Input'

const App = () => {
  const initialInputs = [
    {
      name: 'firstName',
      value: '',
      placeholder: 'First Name',
      type: 'text',
      error: '',
    },
    {
      name: 'lastName',
      value: '',
      placeholder: 'Second Name',
      type: 'text',
      error: '',
    },
    {
      name: 'email',
      value: '',
      placeholder: 'Email Address',
      type: 'text',
      error: '',
    },
    {
      name: 'password',
      value: '',
      placeholder: 'Password',
      type: 'password',
      error: '',
    },
  ]

  const [inputs, setInputs] = useState(initialInputs)

  const handleInputChange = (index, event) => {
    const { value } = event.target
    const update = [...inputs].map((input, i) => {
      if (i === index) {
        return { ...input, value: value }
      } else {
        return input
      }
    })
    setInputs(update)
  }

  const validateEmail = (email) => {
    console.log('test')
    return /\S+@\S+\.\S+/.test(email)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const update = inputs.map((input) => {
      if (input.type === 'email') {
        if (validateEmail(input.value)) {
          console.log(validateEmail(input.value))
          return { ...input, error: 'Looks like this is not an email' }
        }
      }
      return { ...input, error: '' }
    })
    console.log(update)
    setInputs(update)
  }

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-salmon">
      <section className="max-w-main w-full min-h-[800px] bg-hero-pattern">
        <div className="max-w-content w-full h-[800px] flex justify-center items-center mx-auto">
          <div className="flex flex-col gap-[11px]">
            <h1 className="text-50 leading-55 font-bold text-white">
              Learn to code by watching others
            </h1>
            <p className="leading-26 font-medium text-white max-w-[90%]">
              See how experienced developers solve problems in real-time.
              Watching scripted tutorials is great, but understanding how
              developers think is invaluable.
            </p>
          </div>
          <div className="max-w-[540px] w-full h-[560px] flex flex-col items-center gap-6">
            <p className="text-15 py-[17px] w-full bg-purple text-center text-white rounded-[10px] shadow-custom">
              <strong className="medium">Try it free 7 days</strong> then
              $20/mo. thereafter
            </p>
            <form
              className="max-w-[560px] w-full h-full bg-white flex flex-col items-center rounded-[10px] shadow-custom p-10"
              onSubmit={handleSubmit}
            >
              <div className="h-[390px] max-w-[460px] w-full flex flex-col gap-5">
                {inputs.map((input, i) => {
                  return (
                    <Input
                      key={input.name}
                      inputValue={input.value}
                      name={input.name}
                      placeholder={input.placeholder}
                      type={input.type}
                      handleInputChange={(e) => handleInputChange(i, e)}
                      error={input.error}
                    />
                  )
                })}
                <div>
                  <button
                    className="py-[15px] text-15 font-semibold w-full bg-green text-white rounded-[5px]"
                    type="submit"
                  >
                    CLAIM YOUR FREE TRIAL
                  </button>
                  <p></p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
