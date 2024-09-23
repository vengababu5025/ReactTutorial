import React,{useState} from 'react'

function Counter2() {
    const initial=0
    const [count,setCount]=useState(initial)

    const increment=()=>{
        for(let i=1;i<=5;i++){
            setCount(pre=>pre+1)
        }
    }
  return (
    <div>
        Count: {count}
        <button onClick={()=>setCount(pre=>pre+1)}>Increment</button>
        <button onClick={()=>setCount(pre=>pre-1)}>Decrement</button>
        <button onClick={()=>setCount(initial)}>Reset</button>
        <button onClick={increment}>Increment5</button>
    </div>
  )
}

export default Counter2