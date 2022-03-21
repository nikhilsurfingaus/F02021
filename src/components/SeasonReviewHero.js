import '../App.css'
import React from 'react'
import './HeroSection.css'
import './arrow.css'


function SeasonReviewHero() {
    return (
        <div className='hero-container'>
            <h1>Season Review</h1>
            <p>Drive into a recap of key events at each race this season</p>
            <div class="arrow bounce">
                <a class="fa fa-arrow-down fa-3x" href="/#"> </a>
            </div>
        </div>
    )
}

export default SeasonReviewHero