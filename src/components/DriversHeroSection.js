import '../App.css'
import React from 'react'
import './HeroSection.css'
import './arrow.css'


function DriversHeroSection() {
    return (
        <div className='hero-container'>
            <h1>Driver Review</h1>
            <p>Reflect on each drivers ranking, highs and lows for the 2021 season</p>
            <div class="arrow bounce">
                <a class="fa fa-arrow-down fa-3x" href="/#"> </a>
            </div>
        </div>
    )
}

export default DriversHeroSection