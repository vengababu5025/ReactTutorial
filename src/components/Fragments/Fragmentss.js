import React from 'react'

function Fragmentss() {
    const items = ['Apple', 'Banana', 'Cherry'];
  return (
    // <ul>
    //     {
    //         items.map((item,index)=>(
    //             <React.Fragment key={index}>
    //                 <li>{item}</li>
    //                 <p>is very tasty</p>
    //             </React.Fragment>
    //         ))
    //     }
    // </ul> 
    <ul>
       {
         items.map((item,index)=>(
            <li>{item}</li>
            // <p>vengabbau</p>
         ))
       }
    </ul>
  )
}

export default Fragmentss