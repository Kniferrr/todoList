import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import "./Todoform.css"
import Filter from '../Filter/Filter'

import {Submit, LableChange} from "../../redusers/todoformReduser"

import { addTodoItem,SetFilter} from "../../redusers/todoitems"




function TodoForm() {

  const dispatch = useDispatch();
  const lable = useSelector((state) => state.todoform.lable);

  if(lable==="work"){
    throw new Error("Error");
  }
  const onSubmit = (e) =>{
    e.preventDefault();
    dispatch(addTodoItem(lable))
    dispatch(Submit())
}

  const onLableChange = (e) => {
    e.preventDefault();
    dispatch(LableChange(e.target.value))
  }

  const changeFilterAll = () => {
    dispatch(SetFilter("all"))
  }
  const changeFilterActive = () => {
    dispatch(SetFilter("active"))
  }
  const changeFilterDone = () => {
    dispatch(SetFilter("done"))
  }
  

  return (
    
    <>
        <h2>Todos</h2>

        <Filter 
        changeFilterAll={changeFilterAll}
        changeFilterActive={changeFilterActive}
        changeFilterDone={changeFilterDone}
        />

        <form className='ItemAdd d-flex' onSubmit={onSubmit}>
                <input type="text" className='form-control' onChange={onLableChange} placeholder="neds" value={lable } />
                <button className='btn btn-outline-secondary' >Add Item</button>
            </form>
            </>
    
  )
}

export default TodoForm