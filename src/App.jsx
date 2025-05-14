import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>React course learn with hitesh</h1>
      <h2>counter value:</h2>
      <button>Add value</button>
      <button>Subtract value</button>
    </>
  )
}

export default App
