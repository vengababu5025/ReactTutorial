import React, { useEffect, useState } from 'react'

function UseEffects2() {
  const[count,setcount]=useState(0)
  const[name,setName]=useState("")

  useEffect(()=>{
    console.log(`you clicked ${count} times`);
   
  },[count])

  useEffect(()=>{
    console.log("you enter you name");
  })
  return (
    <div>
      <input type='text'
      value={name}
      onChange={e=>{
        setName(e.target.value)
      }}/>
      <button onClick={()=>setcount(prev=>prev+1)}>count incremnt{count}</button>
    </div>
  )
}

export default UseEffects2


