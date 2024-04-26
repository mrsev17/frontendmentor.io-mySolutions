import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

interface Advice {
  advice: string
  id: number
}

interface InitialState {
  loading: boolean
  error: string | null
  adviceInfo: Advice
}

export const fetchAdvice = createAsyncThunk<
  Advice,
  void,
  { rejectValue: string }
>('tipCalculator/fetchAdvice', async (_, { rejectWithValue }) => {
  try {
    const response = await fetch('https://api.adviceslip.com/advice')
    if (!response.ok) {
      throw new Error('Failed to fetch advice')
    }
    const data = await response.json()
    return data.slip
  } catch (error) {
    return rejectWithValue('Failed to fetch advice')
  }
})

const initialState: InitialState = {
  loading: false,
  error: null,
  adviceInfo: {
    advice: '',
    id: 0,
  },
}

const tipCalculator = createSlice({
  name: 'tipCalculator',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdvice.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchAdvice.fulfilled, (state, action) => {
        state.loading = false
        state.adviceInfo.advice = action.payload.advice
        state.adviceInfo.id = action.payload.id
      })
      .addCase(fetchAdvice.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload ?? 'Failed to fetch advice'
      })
  },
})

export default tipCalculator.reducer
