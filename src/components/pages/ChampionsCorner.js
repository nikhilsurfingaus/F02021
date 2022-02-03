import React from 'react';
import '../../App.css'
import ChampHeroSection from '../ChampHeroSection';
import Footer from '../Footer';
import '../Champions.css';
import Timeline from '../Timeline';


export default function ChampionsCorner() {
    return (
        <>
            <ChampHeroSection />
            <div className="sect">
                <h1>START MAX VERSTAPPENS</h1>
                <h1>PATH TO GLORY</h1>
                <Timeline />
            </div>
            <Footer />
        </>
    );
}