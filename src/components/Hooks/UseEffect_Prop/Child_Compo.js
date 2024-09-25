import React, { useEffect,memo } from 'react'

function Child_Compo({message}) {

    useEffect(()=>{
        console.log("Message changed",message)
    },[message])
  return (
    <div>
        <h1>{message}</h1>
    </div>
  )
}

export default Child_Compo
