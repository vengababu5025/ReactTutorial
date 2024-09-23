import React, { Component } from 'react'

export class PropssClasss extends Component {
  
  render() {
    const {name,address}=this.props
    return (
      <div>
        <h1>Hello{this.props.name} Welcome to props tutorial(class) from {this.props.address}</h1>
        <h1>Hello {name} Welcome to props tutorial(class) from {address} </h1>
      </div>
    )
  }
}

export default PropssClasss