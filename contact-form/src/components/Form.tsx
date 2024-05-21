import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { Input } from './Input'
import { Message } from './Message'
import { QueryType } from './QueryType'
import {
  setFirstName,
  setLastName,
  setEmail,
  setMessage,
  setConsent,
} from '../redux/formSlice'
import { Submit } from './Submit'

export const Form = () => {
  const dispatch = useAppDispatch()
  const getForm = useAppSelector((state) => state.form)

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

  return (
    <section className="max-w-content w-full rounded-2xl bg-white p-10">
      <h1 className="text-32 font-bold leading-100 text-grey mb-8">
        Contact Us
      </h1>
      <form action="" className="flex flex-col gap-10">
        <div className="flex flex-col gap-6">
          <div className="flex justify-between gap-4">
            <Input
              value={getForm.formData.firstName}
              target="First Name"
              htmlFor="firstName"
              onChange={(e) => changeFirstName(e)}
            />
            <Input
              value={getForm.formData.lastName}
              target="Last Name"
              htmlFor="lastName"
              onChange={(e) => changeLastName(e)}
            />
          </div>
          <Input
            value={getForm.formData.email}
            target="Email Address"
            htmlFor="email"
            onChange={(e) => changeEmail(e)}
          />
          <QueryType />
          <Message value={getForm.formData.message} onChange={changeText} />
        </div>
        <Submit
          check={getForm.formData.consentContact}
          onChange={() => dispatch(setConsent())}
        />
      </form>
    </section>
  )
}
