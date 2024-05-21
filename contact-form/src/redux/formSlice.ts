import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { errors } from '../data/errors'
import { validateEmail } from '../data/funcs'
import { Form } from '../data/types'

const initialState: Form = {
  formData: {
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    queryType: '',
    consentContact: false,
  },
  formErrors: {
    errors: {
      firstNameError: '',
      lastNameError: '',
      emailError: '',
      messageError: '',
      queryTypeError: '',
      consentContactError: '',
    },
  },
}

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setFirstName(state, action: PayloadAction<string>) {
      state.formData.firstName = action.payload
    },
    setLastName(state, action: PayloadAction<string>) {
      state.formData.lastName = action.payload
    },
    setEmail(state, action: PayloadAction<string>) {
      state.formData.email = action.payload
    },
    setMessage(state, action: PayloadAction<string>) {
      state.formData.message = action.payload
    },
    setQueryType(state, action: PayloadAction<string>) {
      state.formData.queryType = action.payload
    },
    setConsent(state) {
      state.formData.consentContact = !state.formData.consentContact
    },
    setSubmitForm(state) {
      if (state.formData.firstName.length < 1) {
        state.formErrors.errors.firstNameError = errors.firstNameError
      } else {
        state.formErrors.errors.firstNameError = ''
      }
      if (state.formData.lastName.length < 1) {
        state.formErrors.errors.lastNameError = errors.lastNameError
      } else {
        state.formErrors.errors.lastNameError = ''
      }
      if (!validateEmail(state.formData.email)) {
        state.formErrors.errors.emailError = errors.emailError
      } else {
        state.formErrors.errors.emailError = ''
      }
      if (!state.formData.queryType) {
        state.formErrors.errors.queryTypeError = errors.queryTypeError
      } else {
        state.formErrors.errors.queryTypeError = ''
      }
      if (state.formData.message.length < 1) {
        state.formErrors.errors.messageError = errors.messageError
      } else {
        state.formErrors.errors.messageError = ''
      }
      if (!state.formData.consentContact) {
        state.formErrors.errors.consentContactError = errors.consentContactError
      } else {
        state.formErrors.errors.consentContactError = ''
      }
      if (
        !state.formErrors.errors.firstNameError &&
        !state.formErrors.errors.lastNameError &&
        !state.formErrors.errors.emailError &&
        !state.formErrors.errors.queryTypeError &&
        !state.formErrors.errors.messageError &&
        !state.formErrors.errors.consentContactError
      ) {
        const data = [
          state.formData.firstName,
          state.formData.lastName,
          state.formData.email,
          state.formData.queryType,
          state.formData.message,
          state.formData.consentContact,
        ]
        console.log('Form submited', data)
      }
    },
  },
})

export const {
  setFirstName,
  setLastName,
  setEmail,
  setMessage,
  setQueryType,
  setConsent,
  setSubmitForm,
} = formSlice.actions
export default formSlice.reducer
