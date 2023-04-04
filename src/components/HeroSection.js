import { Button } from './Button'
import '../App.css'
import React from 'react'
import './HeroSection.css'

function HeroSection() {
    return (
        <div className='hero-container'>
            <h1>FORMULA 1 2021 THE YEAR THAT WAS</h1>
            <p>Drive into a recap of key events of each race this season</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>Away We Go</Button>
            </div>
        </div>
    )
}

export default HeroSection
