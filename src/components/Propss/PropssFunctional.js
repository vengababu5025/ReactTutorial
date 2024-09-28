import React from 'react'

const PropssFunctional=props=>{
  const{name,current_address}=props
  const specificChild = React.Children.toArray(props.children).find(
    (child) => child.type === 'h2'
  );
  return(
    <div className='App'>
      <h1>Hello {name}, Welcome to the props tutorial from {current_address}</h1>
      {props.children}
    </div>
  )
}

export default PropssFunctional