import React, { useState } from 'react'

function CounterFn() {
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
        let updateValue = count+1;
        setCount(updateValue);
    }

    const handleDecrement = () => {
        setCount(prevState => prevState-1);
    }
    
  return (
    <div>
      <button onClick={handleIncrement}>+</button>
      <h3>Count: {count}</h3>
      <button onClick={handleDecrement}>-</button>
    </div>
  )
}

export default CounterFn
