import { createSlice } from '@reduxjs/toolkit'

export const todoform = createSlice({
  name: 'todoform',
  initialState: {
    lable: "",
  },
  reducers: {
    LableChange: (state,e) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.lable = e.payload;
      
    },
    Submit: (state,e) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.lable = "";
      
    },
  },
})

// Action creators are generated for each case reducer function
export const { LableChange, Submit } = todoform.actions

export default todoform.reducer