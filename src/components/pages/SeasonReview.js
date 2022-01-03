import React from 'react';
import '../../App.css'
import Footer from '../Footer';
import Races from '../Races';
import SeasonReviewHero from '../SeasonReviewHero'

export default function SeasonReview() {
    return (
    <>
        <SeasonReviewHero />
        <Races />
        <Footer />
    </>

    );
}