import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)
  const [text, setText] = useState('test to do')
  const [todo, setTodo] = useState({
    id: 1,
    text: text
  })
  const [todos, setTodos] = useState([])

  const addTodo = (text) => {
    const newTodo = setTodo({
      id: Math.floor(Math.random() * 10000),
      text: text
    }) 
    setTodos([...todos, newTodo])
    setText("")
  }

  const delTodo = (todo) => {
    setTodos(todos.filter(todo))
  }

  useEffect(() => {
    console.log(todos)
  }, [todos])

  return (
    <>
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

                <button onClick={() => delTodo(todo)}>delete</button>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default App
