import '../App.css'
import React from 'react'
import './HeroSection.css'

function ComingSoonHero() {
    return (
        <div className='hero-container'>
            <video src='/videos/Loop.mp4' autoPlay loop muted />
            <h1>Coming Soon Stay Tuned...</h1>
        </div>
    )
}

export default ComingSoonHero