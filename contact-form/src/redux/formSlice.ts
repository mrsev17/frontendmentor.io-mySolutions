import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Form {
  formData: {
    firstName: string
    lastName: string
    email: string
    message: string
  }
}

const initialState: Form = {
  formData: {
    firstName: '',
    lastName: '',
    email: '',
    message: '',
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
  },
})

export const { setFirstName, setLastName, setEmail, setMessage } =
  formSlice.actions
export default formSlice.reducer
