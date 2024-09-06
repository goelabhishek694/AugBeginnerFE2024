import React from 'react'

function ConditionalRendering({isUserLoggedIn,username}) {
  return (
    <>
        {
            isUserLoggedIn ? 
            (<h1>Welcome, {username}</h1>) : (<h1>Please login to continue</h1>)
        }
    </>
  )
}

export default ConditionalRendering