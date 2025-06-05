// import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'

function App() {

  return (
    <div className='w-full h-screen p-10'>
      <h1 className='text-5xl font-bold '><center>Redux ToolKit Todo App</center></h1>
      <AddTodo/>
      <Todo/>
    </div>
  )
}

export default App
