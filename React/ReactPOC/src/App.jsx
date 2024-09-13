import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyComponent from './Components/MyComponent'
import DisplayData from './Components/DisplayData'
import ConditionalRendering from './Components/ConditionalRendering'
import EventHandling from './Components/EventHandling'
import Counter from './Components/Counter'
import SimpleForm from './Components/SimpleForm'
import AdvancedForm1 from './Components/AdvancedForm1'
import AdvancedForm2 from './Components/AdvancedForm2'
import TemperatureInput from './Components/TemperatureInput'
import TemperatureDisplay from './Components/TemperatureDisplay'
import UseEffectHook from './Components/UseEffectHook'
import ReactRouterDOM from './Components/ReactRouterDOM'

function App() {
  const [count, setCount] = useState(0);
  // props help us to send data from parent to child component
  // JSX is the part after return keyword 
  const fruits=["Apple","Mango","Pineapple","Grapes","Cherry"];
  const person={
    name:"Sai",
    age:23
  }

  let isUserLoggedIn=true;
  let username="Jayadeep";
  const [temperature, setTemperature] = useState(0);
  const updateTemperature = (value) =>{
    console.log("temperature state is chnaged in App");
    setTemperature(value);
  }

  return (
    <>
      {/* <h1>Hello World</h1>
      <MyComponent count={count} msg1={"Grow your career or business with Premium"} msg2={"Try Premium for INR 0"}/>
      <MyComponent count={100} msg1={"Profile Viewers"} msg2={"View all Analytics"}/>
      <MyComponent count={12}/> */}
      {/* <DisplayData shoppingList={fruits} user={person}></DisplayData> */}
      {/* <ConditionalRendering isUserLoggedIn={isUserLoggedIn} username={username}></ConditionalRendering> */}
      {/* <EventHandling></EventHandling> */}
      {/* <Counter></Counter> */}
      {/* <SimpleForm></SimpleForm> */}
      {/* <AdvancedForm1></AdvancedForm1> */}
      {/* <AdvancedForm2></AdvancedForm2> */}
      {/* <TemperatureInput temperature={temperature} updateTemperature={updateTemperature}></TemperatureInput>
      <TemperatureDisplay temperature={temperature} ></TemperatureDisplay> */}
      {/* <UseEffectHook></UseEffectHook> */}
      <ReactRouterDOM></ReactRouterDOM>
      </>
  )
}

export default App
