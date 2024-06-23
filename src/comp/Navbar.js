import React from 'react'
import '../style/Navbar.css'
import { HashLink as Link } from 'react-router-hash-link'

function Navbar() {
  return (
    <div className="Navbar-items">
      <div className="Navbaritemstotal">
        <ul>
          <li><Link to="#Hero" className="Link">HOME</Link></li>
          <li><Link to="#Middle" className="Link">ABOUT</Link></li>
          <li><Link to="#Ending" className="Link">CONTACT</Link></li>
          <li><Link to="#Home" className="Link">EVENT</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
