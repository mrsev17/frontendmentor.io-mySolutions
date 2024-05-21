import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Form {
  formData: {
    firstName: string
    lastName: string
    email: string
    message: string
    queryType: string
    consentContact: boolean
  }
}

const initialState: Form = {
  formData: {
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    queryType: '',
    consentContact: false,
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
  },
})

export const {
  setFirstName,
  setLastName,
  setEmail,
  setMessage,
  setQueryType,
  setConsent,
} = formSlice.actions
export default formSlice.reducer
