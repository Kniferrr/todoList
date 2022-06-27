import { createSlice } from '@reduxjs/toolkit'

let newid = 2;

const createItem = (lable) => {
    return{
      lable,
      important: false,
      done: false,
      id: newid++,
    };
    };

    const selection = (state, e, prop) =>{
        const id = e.payload;
        
        const idx = state.todoData.findIndex(el=> el.id == id);
        const arr = state.todoData;
        console.log(e)
        console.log(idx)
        const oldItem = arr[idx];
        
        const newItem = {...oldItem, [prop]: !oldItem[prop]};

        return [...state.todoData.slice(0, idx),newItem,...state.todoData.slice(idx+1)];
    }

export const todoitems = createSlice({
  name: 'todoitems',
  initialState: {
    todoData: [
        createItem("Hello"),
        createItem("I am"),
        createItem("you ToDoList")
      ],
      term: "",
      filter: "all"
  },
  reducers: {
    addTodoItem: (state,lable) => {
      
        const newItem = createItem(lable.payload);
      
        let newArray = [...state.todoData, newItem]; 
        
        state.todoData = newArray;
        
    },
    DelTodoItem: (state,e) => {

      const id = e.payload;
      const idx = state.todoData.findIndex(el=> el.id == id);

      let newArray = [...state.todoData.slice(0, idx),...state.todoData.slice(idx+1)];

      state.todoData = newArray;
      },
      ImportantTodoItem: (state,e) => {
        state.todoData = selection(state, e, "important");
        },
          ToggleDone: (state,e) => {
            state.todoData = selection(state, e, "done");
            },
            SetFilter: (state,e) => {
              state.filter = e.payload;
              },
          
        
    },
})

// Action creators are generated for each case reducer function
export const { addTodoItem, DelTodoItem,ImportantTodoItem,ToggleDone,SetFilter } = todoitems.actions

export default todoitems.reducer