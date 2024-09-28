import React, { useState } from 'react'

function Example1() {
    const[nam,setNam]=useState("")
    const[mar,setMar]=useState([])
    const arr=[{
        name:'vengababu',
        marks:[35,45,33,45,66]
    },
    {
        name:'saketh',
        marks:[45,67,34,56,44]
    }
]
const handle=(e)=>{
    const {value}=e.target
    const student=arr.find(std=>std.name==value)
    console.log(student.marks)
    console.log(value)
    setNam(value)
    setMar(student.marks)
    
}
  return (
    <div>
    <select value={nam} onChange={handle}>
       
        { 
            arr.map((item)=>(
                
                <option value={item.name}>{item.name}</option>
            ))
        }
    </select>


    <h2>marks</h2>
    <select>
        {
            mar.map((item)=>(
                <option>{item}</option>
            ))
        }
    </select>
    </div>
  )
}

export default Example1