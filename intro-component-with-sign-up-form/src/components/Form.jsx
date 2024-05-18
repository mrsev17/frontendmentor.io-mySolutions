import { useState } from 'react'
import { Input } from './Input'
import { Submit } from './Submit'

export const Form = () => {
  const [formData, setFormData] = useState({
    'First Name': '',
    'Last Name': '',
    email: '',
    Password: '',
  })
  const [errors, setErrors] = useState({
    'First Name': '',
    'Last Name': '',
    email: '',
    Password: '',
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }))
  }

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const updatedErrors = { ...errors }
    for (const input in formData) {
      if (input !== 'email' && !formData[input].trim()) {
        updatedErrors[input] = `${input} cannot be empty`
      } else if (input === 'email' && !validateEmail(formData[input])) {
        updatedErrors[input] = `Looks like this is not an ${input}`
      } else {
        updatedErrors[input] = ''
      }
    }
    setErrors(updatedErrors)
  }

  return (
    <div className="max-w-[540px] w-full flex flex-col items-center gap-6">
      <p className="text-15 py-[19px] w-full bg-purple text-center text-white rounded-[10px] shadow-custom">
        <strong className="medium">Try it free 7 days</strong> then $20/mo.
        thereafter
      </p>
      <form
        className="max-w-[560px] w-full h-full bg-white flex flex-col items-center rounded-[10px] shadow-custom p-10 tablet:p-6"
        onSubmit={handleSubmit}
      >
        <div className="max-w-[460px] w-full flex flex-col gap-5">
          <Input
            handleInputChange={handleInputChange}
            value={formData['First Name']}
            name="First Name"
            type="text"
            placeholder="First Name"
            error={errors['First Name']}
          />
          <Input
            handleInputChange={handleInputChange}
            value={formData['Last Name']}
            name="Last Name"
            type="text"
            placeholder="Last Name"
            error={errors['Last Name']}
          />
          <Input
            handleInputChange={handleInputChange}
            value={formData.email}
            name="email"
            type="text"
            placeholder="Email Address"
            error={errors.email}
          />
          <Input
            handleInputChange={handleInputChange}
            value={formData.Password}
            name="Password"
            type="password"
            placeholder="Password"
            error={errors.Password}
          />
          <Submit />
        </div>
      </form>
    </div>
  )
}
