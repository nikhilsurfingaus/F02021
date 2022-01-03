import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import './NavBar.css';
import img1 from '../images/sitelogo.png';

function NavBar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false)


    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    <img src={img1} alt='logo'  className="fas fa-flag-checkered" />
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/season-review' className='nav-links' onClick={closeMobileMenu}>
                            Season Review
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/drivers' className='nav-links' onClick={closeMobileMenu}>
                            Drivers
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/stats' className='nav-links' onClick={closeMobileMenu}>
                            Stats
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/quiz' className='nav-links' onClick={closeMobileMenu}>
                            Quiz
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/champions-corner' className='nav-links' onClick={closeMobileMenu}>
                            Champions Corner
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>

        
        
        </>
    )
}

export default NavBar
