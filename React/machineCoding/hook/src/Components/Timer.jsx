import React, { useEffect, useState, useRef } from 'react'

function Timer() {
    const [seconds, setSeconds] = useState(0);
    const intervalRef = useRef(null);
    // let timerId;
    useEffect(() => {
        // timerId = setInterval(()=>{
        //     setSeconds((prevSeconds)=>prevSeconds+1);
        // },1000)
        intervalRef.current = setInterval(()=>{
            setSeconds((prevSeconds)=>prevSeconds+1);
        },1000)
    },[]);
    
  return (
    <div>
        <p>Seconds : {seconds}</p>
        {/* <button onClick={() => clearInterval(timerId)}>Stop Timer</button> */}
        <button onClick={() => clearInterval(intervalRef.current)}>Stop Timer</button>
    </div>
  )
}

export default Timer