import React from 'react'

function Hello() {
//   return (
//     <div>Hello</div>
//   )

    return React.createElement('div',
        {id:'hello',className:'hel'},
        React.createElement('h1',null,'Hello from jsx'))
}

export default Hello