import React, { useEffect, useState } from "react";

function UseEffectHook() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  //first variation
  useEffect(() => {
    //called when component is rendered(mounted) for the first time and everytime when state changes
    console.log("i am useEffect 1");
  });

  //second variation -> with empty dependency array
  useEffect(() => {
    //called when component is rendered(mounted) for the first time
    console.log("i am useEffect 2 ");
    //display my spin wheel
  }, []);

   //third variation -> with !empty dependency array
  useEffect(()=>{
      //called when component is rendered(mounted) and everytime when count state changes
      console.log("i am useEffect 3 ");
  },[count])

  //fourth variation + cleanup
  useEffect(()=>{
      console.log("i am useEffect 4");
      //i have made a network request -> 5sec 
      let timerId=setTimeout(()=>{
        console.log("network reposnse from UE4", count);
      },5000)
      //just before next useEffect is called, cleanup function is called first.
      return ()=>{
          //remove event listensers after previous is removed and before next button is created
          console.log("cleanup before useEffect 4 is called");
          clearTimeout(timerId);
      }
  },[count])






  console.log("ui is rendered");
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <p>My name is {name}</p>
      <button onClick={() => setName("Scaler")}>Reveal Name</button>
    </div>
  );
}

export default UseEffectHook;
