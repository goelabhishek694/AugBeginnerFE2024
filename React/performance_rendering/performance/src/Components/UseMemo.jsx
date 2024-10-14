import React, { useState, useMemo } from 'react'

const generateLargeArray = () => {
    const largeArray = [];
    for(let i=0;i<1000000; i++){
        largeArray.push(i);
    }
    return largeArray;
}

const sumArray = (arr) => {
    console.log("Calculating sum....");
    return arr.reduce((acc,curr) => acc+curr, 0);
    
}


function UseMemo() {
    const [count,setCount] = useState(0);
    // console.time();
    // const largeArray = generateLargeArray();
    // const sum = sumArray(largeArray);
    // console.timeEnd()
    console.time();
    const largeArray = useMemo(()=>generateLargeArray(),[]);
    const sum = useMemo(() => sumArray(largeArray),[largeArray]);
    console.timeEnd()
  return (
    <div>
        <h1>Sum: {sum}</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <p>Count: {count}</p>
    </div>
  )
}

export default UseMemo