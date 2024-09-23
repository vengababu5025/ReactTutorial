import React, { Component } from 'react'

class DynamicChange extends Component {
    constructor(){
        super()
        this.state={
            message:'Dynamic changes'
        }
    }
    
update=()=>{
  this.setState((prevstate)=>({
    
    message:prevstate.message === "Thankyou"?"Dynamic changes":"Thankyou"
  })
  )
}
    
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={()=>this.update()}>update</button>
    </div>
    )
  }
}

export default DynamicChange