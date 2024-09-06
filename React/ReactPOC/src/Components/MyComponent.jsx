import React from 'react'

function MyComponent({count,msg1,msg2}) {
  // console.log(props);
  return (
    <>
      <div>Hello, i am a Component {count}</div>
      <p>{msg1}</p>
      <p>{msg2}</p>
    </>
  )
}

export default MyComponent