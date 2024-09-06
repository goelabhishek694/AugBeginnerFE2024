import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyComponent from './Components/MyComponent'

function App() {
  const [count, setCount] = useState(0);
  // props help us to send data from parent to child component
  // JSX is the part after return keyword 
  return (
    <>
      <h1>Hello World</h1>
      <MyComponent count={count} msg1={"Grow your career or business with Premium"} msg2={"Try Premium for INR 0"}/>
      <MyComponent count={100} msg1={"Profile Viewers"} msg2={"View all Analytics"}/>
      <MyComponent count={12}/>
      </>
  )
}

export default App
