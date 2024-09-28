import React, { useState } from 'react'
import './styles.css'

function Example2() {
    const[color,setColor]=useState('')
  return (
    <div>
        <div className='box' style={{background:color}}>  
        </div>

        <button style={{background:"red"}} onClick={()=>setColor("red")}>red</button>
        <button style={{background:"blue"}} onClick={()=>setColor("blue")}>blue</button>
        <button style={{background:"green"}} onClick={()=>setColor("green")}>green</button>
    </div>
        
  )
}

export default Example2