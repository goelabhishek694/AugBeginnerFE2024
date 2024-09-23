import React from 'react'
import { useState } from 'react'

function Counter() {
    
    // 1. state management : useState is providing initial value , count+1 , count-1 is sued for inc and dec the count value 
    const [count, setCount] = useState(0);
    //2. event handler : we attach them and they help in state management
    const handleIncrement = () => {
        setCount(count+1);
    }
    const handleDecrement = () => {
        setCount(count-1);
    }

  return (
    // 3. UI : it is thr html that will render UI 
    <div>
        <h1>Counter</h1>
        <button onClick={handleIncrement}>+</button>
        <p>{count}</p>
        <button onClick={handleDecrement}>-</button>
    </div>

  )
}

export default Counter