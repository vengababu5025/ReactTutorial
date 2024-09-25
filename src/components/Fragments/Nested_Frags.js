import React from 'react'

function Nested_Frags() {
    const arr=['vengababu','vinay','Ganesh','vinod']
  return (
    <div>
        <ul>
        {arr.map((name) => (
                <React.Fragment>
                    <li>{name}...
                    <React.Fragment>
                        <p>....Student</p>
                    </React.Fragment>
                    </li>
                    
                </React.Fragment>
            ))}
            
        </ul>
    </div>
  )
}

export default Nested_Frags