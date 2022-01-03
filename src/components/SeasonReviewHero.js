import { Button } from './Button'
import '../App.css'
import React from 'react'
import './HeroSection.css'

function SeasonReviewHero() {
    return (
        <div className='hero-container'>
            <video src='/videos/Loop.mp4' autoPlay loop muted />
            <h1>Season Review</h1>
            <p>Drive into a recap of key events at each race this season</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>Scroll Down To Begin</Button>
            </div>
        </div>
    )
}

export default SeasonReviewHero