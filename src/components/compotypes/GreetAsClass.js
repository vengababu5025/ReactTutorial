import React, { Component } from 'react'

class GreetAsClass extends Component {
    
      render() {
        return (
          <div>
            <h2>Hello {this.props.name} welcome from class component</h2>
          </div>
        );
      }
}

export default GreetAsClass