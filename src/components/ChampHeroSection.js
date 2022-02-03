import '../App.css'
import React from 'react'
import './HeroSection.css'
import './arrow.css'


function ChampHeroSection() {
    return (
        <div className='hero-container'>
            <video src='/videos/Loop.mp4' autoPlay loop muted controls webkit-playsinline playsinline/>
            <h1>Champions Corner</h1>
            <p>Take a journey through Max Verstappens performance at each race in 2021</p>
            <div class="arrow bounce">
                <a class="fa fa-arrow-down fa-3x" href="/#"> </a>
            </div>
        </div>
    )
}

export default ChampHeroSection