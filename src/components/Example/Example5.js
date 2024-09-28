import React, { useEffect, useState } from 'react'

function Example5() {
    const[timer,setTimer]=useState(10)
    const[message,setMessage]=useState('time left is')

    useEffect(()=>{
        if(timer>0){
            setTimeout(()=>{
                setTimer((prev)=>prev+1)
            },1000)
        }
        else{
            setMessage("time is up")
        }
    },[timer])
  return (
    <div>
        <h2>{message}: {timer}</h2>
    </div>
  )
}

export default Example5