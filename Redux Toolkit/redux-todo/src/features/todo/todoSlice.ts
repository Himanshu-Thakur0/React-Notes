import { createSlice, nanoid } from "@reduxjs/toolkit";

interface todo {
    id:string,
    text:string
}

interface todoState {
    todos: todo[]
}

const initialState:todoState = {
    todos :[{id:nanoid() , text:"Hello Redux Todo"}]
}

const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers : {
        addTodo : (state,action) => { 
            const todo = {
                id:nanoid(),
                text:action.payload
            }

            state.todos.push(todo)
         },
        removeTodo : (state,action) => { 
            state.todos = state.todos.filter( todo => todo.id !== action.payload)
          }
    }
})

export const todoReducer = todoSlice.reducer

export const {addTodo,removeTodo} = todoSlice.actions