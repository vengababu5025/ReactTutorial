import React, { useEffect, useState } from 'react'

function Wrongly_effect() {
    const[count,setCount]=useState(0)

    const tick=()=>{
        setCount(prev=>prev+1)
    }

    useEffect(()=>{
        const interval=setInterval(tick,1000)
        return()=>{
            clearInterval(interval)
        }
    },[])
  return (
    <div>
        <h2>{count}</h2>
    </div>
  )
}

export default Wrongly_effect