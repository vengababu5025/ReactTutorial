import React, { useState } from 'react'
import ChildComp from './ChildComp'

function ParentComp() {
    const[message,setMessage]=useState("hello")
    const update=(newmessage)=>{
        setMessage(newmessage)
    }
  return (
    <div>
        <h1>{message}</h1>
        <ChildComp update={update}/>
    </div>
  )
}

export default ParentComp