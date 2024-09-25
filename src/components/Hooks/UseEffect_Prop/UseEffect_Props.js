import React, { useState } from 'react'
import ChildComp from '../../Propss/MthodsAsProps/ChildComp'
import Child_Compo from './Child_Compo'

function UseEffect_Props() {
    const[message,setMessage]=useState("helo World")

    const changemessage=()=>{
        setMessage("Hello React")
    }
  return (
    <div>
        <Child_Compo message={message}></Child_Compo>
        <button onClick={changemessage}>chnage message</button>
    </div>
  )
}

export default UseEffect_Props