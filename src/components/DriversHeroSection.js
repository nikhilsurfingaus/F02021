import { DriversButton } from './DriversButton'
import '../App.css'
import React from 'react'
import './HeroSection.css'

function DriversHeroSection() {
    return (
        <div className='hero-container'>
            <video src='/videos/Loop.mp4' autoPlay loop muted />
            <h1>Driver Review</h1>
            <p>Reflect on each drivers ranking, highs and lows for the 2021 season</p>
            <div className="hero-btns">
                <DriversButton className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>Scroll Down To Begin</DriversButton>
            </div>
        </div>
    )
}

export default DriversHeroSection