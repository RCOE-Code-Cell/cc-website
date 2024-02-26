import React from 'react'
import "/Users/rehbarkhan/Documents/codebox/cc-website/frontend/src/styles/outro.css"
import img3 from "/Users/rehbarkhan/Documents/codebox/cc-website/frontend/public/13.svg"
import img4 from '/Users/rehbarkhan/Documents/codebox/cc-website/frontend/src/assets/rizvi.jpeg'
function Outro() {
    // check figma file for About of upcoming events
  return (
    <div className='Outro'>
        <div className='img'>
            <img className= "img1 " src={img3}></img>
            <img className= "img2 " src={img4}></img>
            </div>

        </div>
  )
}

export default Outro