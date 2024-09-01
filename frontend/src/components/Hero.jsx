import React from 'react'
import "../styles/Hero.css"
import vector2 from "../assets/vector2.png"
import group from "../assets/Group1.svg"

function Hero() {
  return (
    <div className='hero'>
      <img className="background" src={vector2} alt="" />
      <div id="hero_left">
        <img src={group} alt="Group 1" />
      </div>
      <div id="gif">
        <img src="./robot1.gif" alt="Robot 1" className='robot1'/>
      </div>
    </div>
  )
}

export default Hero