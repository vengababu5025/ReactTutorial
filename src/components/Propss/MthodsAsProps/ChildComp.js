import React from 'react'

function ChildComp({update}) {
  return (
    <div>
        <button onClick={()=>update('Message from child')}>upadte</button>
    </div>
  )
}

export default ChildComp