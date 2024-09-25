import React from 'react'
import { Link } from 'react-router-dom'
import './Main_Styles.css'

function Nav() {
    return (
        <nav>

            <div className="nav-buttons">
                <button><Link to="/">Home</Link></button>
                <button><Link to="/About">About</Link></button>
                <button><Link to="/Contact">Contact</Link></button>
            </div>
        </nav>
    )
}

export default Nav