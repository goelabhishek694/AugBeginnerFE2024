import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Components/Counter'
import CounterFn from './Components/CounterFn'
import TodoList from './Components/TodoList'
import TodoListFn from './Components/TodoListFn'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Counter/> */}
    {/* <CounterFn/> */}
    {/* <TodoList/> */}
    <TodoListFn></TodoListFn>
    </>
  )
}

export default App
