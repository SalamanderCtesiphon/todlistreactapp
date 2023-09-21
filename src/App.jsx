import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  const addTodo = () => {
    console.log("Howdy!")
  }

  useEffect(() => {
    const key = setInterval(() => {
      setCounter(count => count + 1)
    }, 1000)

    return () => {
      clearInterval(key)
    }
  }, [])

  return (
    <>
      <p>{counter} seconds have passed</p>
      <label htmlFor="todo">Enter a to do:</label>
      <input type="text" name="todo" id="todo" />
      <button onClick={addTodo}>Add To Do</button>
    </>
  )
}

export default App
