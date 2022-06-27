import React from 'react'
import TodoForm from '../TodoForm/TodoForm'
import TodoListItems from '../TodoListItems/TodoListItems'
import {Counter} from "../../features/counter/Counter.js"

function App() {
  return (
    
    <div className='container'>
    <div className='row'>
    <div className='col todoform'></div>
    <TodoForm/>
    <TodoListItems/>
    </div>
    </div>
    
    
  )
}

export default App