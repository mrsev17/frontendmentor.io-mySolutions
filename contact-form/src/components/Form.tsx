import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import {
  setFirstName,
  setLastName,
  setEmail,
  setMessage,
} from '../redux/formSlice'
import { Input } from './Input'

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

  const changeMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setMessage(e.target.value))
  }

  return (
    <section className="max-w-content w-full h-[773px] rounded-2xl bg-white p-10">
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
          {/* <textarea
            value={text}
            onChange={handleChange}
            placeholder="Enter your text here..."
          /> */}
        </div>
        <div>
          <button className="text-18 leading-150 font-bold py-4 bg-green text-white w-full rounded-lg transition duration-500 hover:bg-[#03402E]">
            Submit
          </button>
        </div>
      </form>
    </section>
  )
}
