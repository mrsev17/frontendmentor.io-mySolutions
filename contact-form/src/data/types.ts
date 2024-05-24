export interface FormData {
  firstName: string
  lastName: string
  email: string
  message: string
  queryType: string
  consentContact: boolean
}

export interface FormErrors {
  firstNameError: string
  lastNameError: string
  emailError: string
  messageError: string
  queryTypeError: string
  consentContactError: string
}

export interface Form {
  formData: FormData
  formErrors: FormErrors
  success: boolean
}
