import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])
  const [text, setText] = useState('')

  return (
    <>
    <header>
      <h1>To Do List</h1>
    </header>
    <main>
      <button onClick={() => console.log('hi')}>add to do</button>
    </main>
    </>
  )
}

export default App
