import React,{ useState } from 'react'

function StateHook() {
    const[Count,SetCount]=useState(0)
    const update=()=>{
        SetCount(Count+1)
    }
    function update2(){
      SetCount(Count-1)
    }
  return (
    <div className="App">
        <button onClick={update}> Count {Count}</button>
        <button onClick={update2}>decrement</button>
    </div>
  )
}

export default StateHook