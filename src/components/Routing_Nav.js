import React from 'react'
import { Link } from 'react-router-dom'


function Routing_Nav() {
  return (
    <nav>
        <button><Link to="/Propss/PropssFunctional">Home</Link></button>
        <button><Link to="/Propss/SetState/Counter">counter</Link></button>

    </nav>
  )
}

export default Routing_Nav