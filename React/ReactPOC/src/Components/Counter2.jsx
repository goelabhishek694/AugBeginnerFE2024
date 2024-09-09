import React from 'react'

function Counter2({count}) {
    const handleIncrement = () => {
        // i cannot chnage the prop because no function to update it's state . 
    }
    console.log("i am also re-rendered");
  return (
    <div>
        <h1 onClick={handleIncrement}>Product Quantity {count}</h1>
    </div>
  )
}

export default Counter2