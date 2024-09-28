import React, { useState } from 'react'

function Example6() {
    const[visible,setVisible]=useState(true)
    const handle=()=>{
        visible?setVisible(false):setVisible(true)
    }
  return (
    <div>
        {visible && "Hello React"}

        <button type='submit'
        onClick={handle}>clik me</button>
    </div>

   
  )
}

export default Example6