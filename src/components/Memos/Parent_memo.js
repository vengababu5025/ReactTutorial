import React,{useState} from 'react'
import Child_Memo from './Child_Memo'

function Parent_memo() {
    const[count,setCount]=useState(0)
    const[count1,setCount1]=useState(0)
    console.log("*********parent component**************")
  return (
    <div>
       
        
        <button onClick={()=>setCount(count+1)}> click me {count}</button>
        <button onClick={()=>setCount1(count1+1)}>click me {count1}</button>
        <Child_Memo countr={count1}></Child_Memo>
    </div>
  )
}

export default Parent_memo