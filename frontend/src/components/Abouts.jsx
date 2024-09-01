import React from 'react';
import about_img from '/public/undraw_team_spirit_re_yl1v.svg'
import about_img1 from '/public/Group1.svg'
import "../styles/Abouts.css"; // Assuming you have a CSS file for styles

function Abouts() {
  return (
    <div className='about'>
      <div className='head'>
        About Us
        <div className="image-container">
          <img src={about_img1} alt="About Image 1" />
          <p>
            "Ignite Your Tech Passion at Codecell RCOE
            Join Codecell, the vibrant technical community at RCOE, Mumbai. Explore coding, design, and innovation alongside like-minded peers. From workshops to hackathons, we're your gateway to tech excellence.
            Discover, Learn, Create.
          </p>
        </div>
      </div>
      <div className="about_img">
        <img src={about_img} alt="About Image" />
      </div>
    </div>
  );
}

export default Abouts;