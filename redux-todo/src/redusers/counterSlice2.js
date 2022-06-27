import { createSlice } from '@reduxjs/toolkit'

export const counterSlice2 = createSlice({
  name: 'counter',
  initialState: {
    value2: 2,
  },
  reducers: {
    increment2: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value2 += 1
    },
    decrement2: (state) => {
      state.value2 -= 1
    },
    incrementByAmount: (state, action) => {
      state.value2 += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment2, decrement2, incrementByAmount } = counterSlice2.actions

export default counterSlice2.reducer