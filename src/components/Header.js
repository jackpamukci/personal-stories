import React from 'react';
import DarkButton from './DarkButton';
// import { Link } from 'react-router-dom';

const Header = () => {
    return(
            <nav className='header'>
                <a href="/" className='siteTitle'>jp.</a>
                
                    <ul className='navlist'>
                        <li className="byron">
                            <DarkButton/>
                        </li>
                        <li>
                            <a href="/about">about</a>
                        </li>
                        <li>
                            <a href="/resume">resume</a>
                        </li>
                        {/* <li>
                            <a href="/projects">projects</a>
                        </li> */}
                        <li>
                            <div class="blog">
                                <a href="/blog">blog</a>
                            </div>
                        </li>
                    </ul>
                </nav>
    )
}


 
export default Header;