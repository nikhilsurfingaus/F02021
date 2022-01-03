import React from 'react';
import '../../App.css'
import DriversHeroSection from '../DriversHeroSection';
import '../Drivers.css'
import DriverCards from '../DriverCards';
import Footer from '../Footer';

export default function Drivers() {
    return (
    <>
        <DriversHeroSection />
        <div className='testy'>
            <DriverCards />
        </div>
        <Footer />
    </>

    );
}