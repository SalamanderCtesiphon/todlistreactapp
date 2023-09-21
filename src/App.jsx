import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)
  const [text, setText] = useState('test to do')
  const [todos, setTodos] = useState([])

  const addTodo = () => {
    setTodos([...todos, text])
    setText("")
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
        value={text}
        onChange={(e) => setText(e.target.value)} 
      />
      <button onClick={addTodo}>Add To Do</button>
      <div className="todoList">
        <ul>
          {todos.map((todo) => {
            return (
              <li key={todo}>
                {todo}
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default App
