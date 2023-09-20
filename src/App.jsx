import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  setInterval(() => {
    setCounter(count => count + 1)
  }, 1000)
  return (
    <>
    <p>{counter} seconds have passed</p>
    </>
  )
}

export default App
