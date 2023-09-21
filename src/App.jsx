import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState('test to do')
  const [todo, setTodo] = useState()
  const [todos, setTodos] = useState([])

  const addTodo = () => {
    setTodos([...todos, todo])
    setText('')
    console.log(todo)
  }

  const delTodo = (todo) => {
    setTodos(todos.filter(todo))
  }

  /* function delJob(id)  {
    setJobsArray(jobsArray.filter((job) => job.id !== id))
  } */

  useEffect(() => {
    console.log(todos)
  }, [todos])

  return (
    <>
      <h1>The To Do List</h1>
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
