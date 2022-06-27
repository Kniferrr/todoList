import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './counterSlice'

import counterSlice2 from "./counterSlice2"

import todoform from "./todoformReduser"

import todoitems from "../redusers/todoitems"


export default configureStore({
  reducer: {
    counter: counterSlice,
    counter2: counterSlice2,
    todoform: todoform,
    todoitems: todoitems,
},
})