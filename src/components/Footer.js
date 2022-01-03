import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import img1 from '../images/sitelogo.png';


function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Feel free to report any bugs or suggestions 
        </p>
        <p className='footer-subscription-text'>
          Email: nikhilsurfingaus@gmail.com
        </p>

      </section>
      
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              <img src={img1} alt='logo' class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>FO 2021©</small>
          <div class='social-icons'>
            <a
              class='social-icon-link instagram'
              href="https://www.instagram.com/nikhilnaik99/"
              target='_blank'
              rel="noopener noreferrer"
              aria-label='Instagram'
            >
              <i class='fab fa-instagram fa-2x' />
            </a>
            <a
              class='social-icon-link youtube'
              href="https://www.youtube.com/c/WaveFlightSimulations"
              target='_blank'
              rel="noopener noreferrer"
              aria-label='Youtube'
            >
              <i class='fab fa-youtube fa-2x' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
