import React from 'react';
import '../Quiz.css'
import '../../App.css'
import QuizHeroSection from '../QuizHeroSection';
import Footer from '../Footer';
import Questions from '../Questions';


export default function Quiz() {
    return (
        <>
            <QuizHeroSection />
            <div className="sect">
                <Questions />
            </div>
            <Footer />
        </>
    );
}