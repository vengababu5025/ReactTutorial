import React, { useContext } from 'react'
import Child3 from './Child3'
import { UserContext } from './Context'

function Child2() {
  const {user,setUser}=useContext(UserContext)
  return (
    <div>
        <h2>child2:{user}</h2>
        <Child3/>
        <button onClick={()=>setUser('babu')}>change2</button>
    </div>
  )
}

export default Child2