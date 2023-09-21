import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)
  const [todo, setTodo] = useState('test to do')
  const [todos, setTodos] = useState([])

  const addTodo = () => {
    setTodos([...todos, todo])
  }

  useEffect(() => {
    const key = setInterval(() => {
      setCounter(count => count + 1)
    }, 1000)

    return () => {
      clearInterval(key)
    }
  }, [])

  useEffect(() => {
    console.log(todos)
  }, [todos])

  return (
    <>
      <p>{counter} seconds have passed</p>
      <label htmlFor="todo">Enter a to do:</label>
      <input 
        type="text" 
        name="todo" 
        id="todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)} 
      />
      <button onClick={addTodo}>Add To Do</button>
    </>
  )
}

export default App
