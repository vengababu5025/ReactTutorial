import { useState } from "react"
import React from 'react'

function ArrayHook() {

    const [items,setItems]=useState([])
    const addItem=()=>{
        setItems([...items,
            {
                id:items.length+1,
                value:Math.floor(Math.random()*10)
            }
        ])
    }
  return (
    <div>
        <button onClick={addItem}>AddItem</button>
        <ul>
            {
                items.map(item=> <li key={item.id}>{item.id}---{item.value}</li>)
            }
        </ul>
    </div>
  )
}

export default ArrayHook