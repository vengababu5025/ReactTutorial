import React, { Component } from 'react'

export class UseEffects extends Component {
    constructor(props){
        super(props)
            this.state={
                count:0,
                message:""
            } 
    }

    componentDidMount(){
        document.title=`clicked ${this.state.count} times`
    }

    componentDidUpdate(prevprops,prevstate){
        if(prevstate.count !== this.state.count)
            console.log("updating document")
            document.title=`clicked ${this.state.count} times`
    }
  render() {
    return (
      <div className='App'>
        <input type='text' 
        value={this.state.message} 
        onChange={e=>{
            this.setState({message:e.target.value})
        }}/>

        <button onClick={()=>this.setState({count:this.state.count+1})}>
            count {this.state.count}
        </button>

      </div>
    )
  }
}

export default UseEffects