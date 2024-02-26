import React, { useState, useEffect } from 'react'
import "/Users/rehbarkhan/Documents/codebox/cc-website/frontend/src/styles/MainPage.css"
import Hero from '/Users/rehbarkhan/Documents/codebox/cc-website/frontend/src/components/Hero.jsx'
import Navbar from '/Users/rehbarkhan/Documents/codebox/cc-website/frontend/src/components/Navbar.jsx'
import Abouts from '/Users/rehbarkhan/Documents/codebox/cc-website/frontend/src/components/Abouts.jsx'
import EventCard from '/Users/rehbarkhan/Documents/codebox/cc-website/frontend/src/components/EventCard.jsx';
import Outro from '/Users/rehbarkhan/Documents/codebox/cc-website/frontend/src/components/Outro.jsx';
import Map from '/Users/rehbarkhan/Documents/codebox/cc-website/frontend/src/components/Map.jsx'

function MainPage() {
    

    return (
        <div >
          
             <Navbar></Navbar>
            <Hero></Hero>
            <Abouts></Abouts>
            <EventCard></EventCard>
            <Map></Map>
            <Outro></Outro>
        </div>
    )
}

export default MainPage