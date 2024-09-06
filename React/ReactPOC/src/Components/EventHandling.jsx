import React from "react";

function EventHandling() {
  const handleClick = () => {
    console.log("i was called");
  };

  return <button onClick={handleClick}>Click Me</button>;
}

export default EventHandling;

// const btn =document.querySelector(".btn");
// btn.addEventListener("click",cb);
// function cb(){
//     console.log("i was clicked");
// }
