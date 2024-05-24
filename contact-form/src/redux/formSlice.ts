import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { validateFormData } from '../data/funcs'
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
    firstNameError: '',
    lastNameError: '',
    emailError: '',
    messageError: '',
    queryTypeError: '',
    consentContactError: '',
  },
  success: false,
}

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setReloadForm() {
      return initialState
    },
    setSuccess(state) {
      state.success = !state.success
    },
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
      const validationErrors = validateFormData(state.formData)
      state.formErrors = validationErrors
      if (
        !state.formErrors.firstNameError &&
        !state.formErrors.lastNameError &&
        !state.formErrors.emailError &&
        !state.formErrors.queryTypeError &&
        !state.formErrors.messageError &&
        !state.formErrors.consentContactError
      ) {
        const data = { ...state.formData }
        state.success = !state.success
        console.log('Form submited', data)
        Object.assign(state, { ...initialState, success: true })
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
  setReloadForm,
  setSuccess,
} = formSlice.actions
export default formSlice.reducer
