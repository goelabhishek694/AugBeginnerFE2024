import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Components/Counter'
import CounterFn from './Components/CounterFn'
import TodoList from './Components/TodoList'
import TodoListFn from './Components/TodoListFn'
import WithLoading from './Components/WithLoading'
import DataComp from './Components/DataComp'

function App() {
  const [count, setCount] = useState(0)
  const EnhancedDataComp =  WithLoading(DataComp);
  // console.log(EnhancedDataComp)

  return (
    <>
    {/* <Counter/> */}
    {/* <CounterFn/> */}
    {/* <TodoList/> */}
    {/* <TodoListFn></TodoListFn> */}
    <EnhancedDataComp data="Here is some data"/>
    </>
  )
}

export default App
