import React from 'react'

function Conditional() {
    const marks=[98,92,93,94,30,37,40]
  return (
    <div className='App'>

        {
            marks.map(mark=>
                <h2>{mark}</h2>
            )
        }
    </div>
  )
}

export default Conditional