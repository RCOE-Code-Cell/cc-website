import React from 'react'
import "../styles/navbar.css"

function Navbar() {
    // check figma file for navbar
  return (
    <div className='navbar'>
      <div id="nav_left">
        <div id="logo">
          <img src="./images/logo.jpeg" alt="" />
        </div>
        <div id="name">
          <h5 id='main'>rcoe</h5>
          <h4 id='second'>code cell</h4>
        </div>
      </div>
      <div id="nav_right">
        <a href=""><img src="./images/join.png" alt="" /></a>
        <a href="">home</a>
        <a href="">events</a>
        <a href="">gallery</a>
        <a href="">blogs</a>
        <a href="">members</a>

      </div>
    </div>
  )
}

export default Navbar