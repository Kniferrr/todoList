import React from 'react'
import TodoForm from '../TodoForm/TodoForm'
import TodoListItems from '../TodoListItems/TodoListItems'
import {Counter} from "../../features/counter/Counter.js"
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'

function App() {
  return (
    <ErrorBoundary>
    <div className='container'>
    <div className='row'>
    <div className='col todoform'></div>
    <TodoForm/>
    <TodoListItems/>
    </div>
    </div>
    </ErrorBoundary>
    
  )
}

export default App