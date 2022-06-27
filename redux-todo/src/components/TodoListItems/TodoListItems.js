import React from 'react'
import Task from '../Task/Task'
import { useSelector, useDispatch } from 'react-redux'

const FilterSerch=(filter,todoData)=>{
    switch(filter){
        case "all":
            return todoData;
            case "active":
            return todoData.filter(el=> el.done === false);
            case "done":
            return todoData.filter(el=> el.done === !false);
        default:
        return 0;
    }
}

function TodoListItems() {
    const todoData = useSelector((state) => state.todoitems.todoData)
    const filter = useSelector((state) => state.todoitems.filter)
   console.log(todoData);
   console.log(filter);
   const doData = FilterSerch(filter,todoData);
   console.log(doData)
   
    const elements = doData.map((item)=>
        {

            return (<li key = {item.id} className="list-group-item litem">
            <Task
            lable = {item.lable} 
            important= {item.important } 
            done = {item.done}
            id = {item.id}
            />
            </li>)
            
            
        });

  return (
    <div>
    <ul className='list-group lgroup'>
                { elements }
            </ul>
        </div>
  )
}


export default TodoListItems