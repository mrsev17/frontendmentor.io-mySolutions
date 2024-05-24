import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { Input } from './Input'
import { Message } from './Message'
import { QueryType } from './QueryType'
import { Submit } from './Submit'
import {
  setFirstName,
  setLastName,
  setEmail,
  setMessage,
  setConsent,
  setSubmitForm,
} from '../redux/formSlice'

export const Form = () => {
  const dispatch = useAppDispatch()
  const getForm = useAppSelector((state) => state.form.formData)
  const getErrors = useAppSelector((state) => state.form.formErrors)

  const changeFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFirstName(e.target.value))
  }

  const changeLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setLastName(e.target.value))
  }

  const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setEmail(e.target.value))
  }

  const changeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setMessage(e.target.value))
  }

  const formSubmitHandle = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(setSubmitForm())
  }

  return (
    <section className="max-w-content w-full rounded-2xl bg-white p-10 tablet:max-w-[92%] mobile:p-6">
      <h1 className="text-32 font-bold leading-100 text-grey mb-8">
        Contact Us
      </h1>
      <form onSubmit={formSubmitHandle} className="flex flex-col gap-10">
        <div className="flex flex-col gap-6">
          <div className="flex justify-between gap-4 mobile:flex-col">
            <Input
              value={getForm.firstName}
              target="First Name"
              htmlFor="firstName"
              onChange={(e) => changeFirstName(e)}
              error={getErrors.firstNameError}
            />
            <Input
              value={getForm.lastName}
              target="Last Name"
              htmlFor="lastName"
              onChange={(e) => changeLastName(e)}
              error={getErrors.lastNameError}
            />
          </div>
          <Input
            value={getForm.email}
            target="Email Address"
            htmlFor="email"
            onChange={(e) => changeEmail(e)}
            error={getErrors.emailError}
          />
          <QueryType />
          <Message value={getForm.message} onChange={changeText} />
        </div>
        <Submit
          check={getForm.consentContact}
          onChange={() => dispatch(setConsent())}
        />
      </form>
    </section>
  )
}
