import { FormData } from './types'
import { errors } from './errors'

export const validateEmail = (email: string) => {
  return /\S+@\S+\.\S+/.test(email)
}

export const validateFormData = (formData: FormData) => {
  return {
    firstNameError: formData.firstName.length < 1 ? errors.firstNameError : '',
    lastNameError: formData.lastName.length < 1 ? errors.lastNameError : '',
    emailError: !validateEmail(formData.email) ? errors.emailError : '',
    queryTypeError: !formData.queryType ? errors.queryTypeError : '',
    messageError: formData.message.length < 1 ? errors.messageError : '',
    consentContactError: !formData.consentContact
      ? errors.consentContactError
      : '',
  }
}


