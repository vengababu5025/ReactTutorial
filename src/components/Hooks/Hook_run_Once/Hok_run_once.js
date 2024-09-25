import React, { useEffect, useState } from 'react'

function Hok_run_once() {
    const[x,setX]=useState(0)
    const[y,setY]=useState(0)
    const logMousePosition=e=>{
        console.log('mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(()=>{
        console.log("event called")
        window.addEventListener('mousemove',logMousePosition)

        return()=>{
            console.log("cleaned up the code")
            window.removeEventListener('mousemove',logMousePosition)
        }
    },[])
  return (
    <div>Hool - x-{x}  y-{y}</div>
  )
}

export default Hok_run_once