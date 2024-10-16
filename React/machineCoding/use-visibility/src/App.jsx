// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Modals from './Components/Modals';
import useVisibility from './useVisibility';

function App() {
  const {isVisible, toggle, show, hide} = useVisibility(false);

  return (
    <div>
      <h1>Custom Hook Example</h1>
      <button onClick={show}>Show</button>
      <button onClick={toggle}>Toggle</button>
      <Modals isVisible={isVisible} hide={hide}></Modals>
    </div>
  )
}

export default App
