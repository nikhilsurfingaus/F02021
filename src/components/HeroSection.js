import { Button } from './Button'
import '../App.css'
import React from 'react'
import './HeroSection.css'

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="/videos/Loop.mp4" autoPlay loop muted />
            <h1>FORMULA 1 THE YEAR THAT WAS 2021</h1>
            <p>Drive into a recap of key events at each race this season</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>Away We Go</Button>
            </div>
        </div>
    )
}

export default HeroSection
