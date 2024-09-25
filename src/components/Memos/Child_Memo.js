import React,{useState,memo} from 'react'

function Child_Memo({text,countr}) {
    console.log("children component")
  return (
    <div>
        <h1>{countr}</h1>
    </div>
  )
}
//export default Child_Memo
export default memo(Child_Memo)