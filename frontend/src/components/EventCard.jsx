import React from 'react'
import "/Users/rehbarkhan/Documents/codebox/cc-website/frontend/src/styles/EventCard.css"
import img from "/Users/rehbarkhan/Documents/codebox/cc-website/frontend/src/assets/Group.png"
import img2 from "/Users/rehbarkhan/Documents/codebox/cc-website/frontend/src/assets/Vector.png"
function EventCard() {
 
  return (
    <div className='EventCard'>
      <div className='head1'>  <img src={img}></img>
       <div className="txt"> Upcoming Events</div>
      </div>
     <div className='box'>
     <img className= "box1 " src={img2}></img>
     <img className= "box2 "src={img2}></img>
     <img className= "box3 "src={img2}></img>
     </div>
     
    </div>
  )
}

export default EventCard