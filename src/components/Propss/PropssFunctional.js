import React from 'react'

const PropssFunctional=props=>{
  const{name,current_address}=props
  return(
    <div className='App'>
      <h1>Hello {name} Welcome to props tutorial from {current_address}</h1>
      {props.children}
    </div>
  )
}

export default PropssFunctional