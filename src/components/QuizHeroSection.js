import '../App.css'
import React from 'react'
import './HeroSection.css'

function ComingSoonHero() {
    return (
        <div className='hero-container'>
            <video src='/videos/Loop.mp4' autoPlay loop muted controls webkit-playsinline playsinline/>
            <h1>Quiz</h1>
            <p>Prove your knowledge with our 2021 season review quiz below</p>
        </div>
    )
}

export default ComingSoonHero