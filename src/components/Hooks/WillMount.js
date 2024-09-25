import React, { useState } from 'react'
import Hok_run_once from './Hook_run_Once/Hok_run_once'
import MyComponent from './MyComponent'

function WillMount() {
    const[display,setDisplay]=useState(true)
    const[display1,setDisplay1]=useState(true)
  return (
    <div>
        <button onClick={()=>setDisplay(!display)}>toggle</button>
        {display&& <MyComponent/>}

        <button onClick={()=>setDisplay1(!display1)}>toggle</button>
        {display1&&<Hok_run_once/>}
    </div>
  )
}

export default WillMount


