import React, { useState } from 'react'

function Counter() {
    //returns an array,  varibale , function 
    //initial state 
    // const arr = useState(0);
    // console.log(arr);
    // //storing initial value of state
    // const count = arr[0];
    // // this is not allowed in react count=count+1; 
    // //function helps us to update our state
    // const setCount = arr[1];
    console.log("component is re-rendered");
    const [count,setCount] = useState(0);

    const handleIncrement = () => {
        console.log("going to increment by 1");
        setCount(count+1)
    }

    const handleDecrement = () => {
        console.log("going to decrement by 1");
        if(count<=0) return 
        setCount(count-1)
    }

    const handleReset = () => {
        console.log("going to reset the count");
        setCount(0);
    }

  return (
    <div style={{display:"flex", gap:"2rem"}}>
        <button onClick={handleIncrement}>+</button>
        <p>{count}</p>
        <button onClick={handleDecrement} >-</button>
        <button onClick={handleReset} >Reset</button>
    </div>
  )
}

export default Counter


// //we are directly altering the DOM 
// const paraEle=document.querySelector(".para");
// const incrementBtn =  document.querySelector(".plus");
// const decrementBtn =  document.querySelector(".minus");

// incrementBtn.addEventListener("click",()=>{
//     let count=paraEle.textContent;
//     paraEle.textContent=count+1
// })
