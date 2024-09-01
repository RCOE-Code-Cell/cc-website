import React, { useState, useEffect } from 'react'
import "../styles/MainPage.css"
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Abouts from '../components/Abouts'
import EventCarda from '../components/EventCarda';
import Events from '../components/Events';
import Outro from '../components/Outro';
import Map from '../components/Map'
import Bgimg from '../components/Background'

function MainPage() {
    

    return (
        <div className='main-main-comp'>
            <Bgimg></Bgimg>
            <Navbar></Navbar>
            <Hero></Hero>
            <Abouts></Abouts>
            {/* <EventCarda></EventCarda> */}
            {/* <Map></Map> */}
            {/* <Outro></Outro>  */}

        </div>
    )
}

export default MainPage