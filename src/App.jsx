import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])
  const [todoText, setTodoText] = useState('')

  return (
    <>
    <header>
      <h1>To Do List</h1>
    </header>
    <main>
      <label htmlFor="todoText">Add a todo:</label>
      <input 
        type="text" 
        name="todoText" 
        id="todoText"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)} 
      />
      <button onClick={() => console.log('hi')}>add to do</button>
    </main>
    </>
  )
}

export default App
