import React from 'react';
import './header.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faPhone, faSearch } from '@fortawesome/free-solid-svg-icons';
import logo from './img/logo.png';

const Header = () => {
    return (
        <div>
            <header className='header'>
                {/* Верхний хедер */}
                <div className='headerParentTop'>
                    <section className='headerTop'>
                        <div className='headerTopLeft'>
                            <div className='headerTopContent'>
                                <span className='headerTopIcon'><FontAwesomeIcon className='headerTopIconLeft' icon={faPhone} /></span>
                                <span className='headerTopText'>1-555-644-5566</span>
                            </div>
                            <div className='headerTopContent'>
                                <span className='headerTopIcon'><FontAwesomeIcon className='headerTopIconLeft' icon={faMapMarkerAlt} /></span>
                                <span className='headerTopText'>Studio City, CA 91604</span>
                            </div>
                        </div>
                        <div className='headerTopRight'>
                            <span className='headerTopRightIcon'>
                                <FontAwesomeIcon className='headerTopIconRight' icon={faSearch} />
                            </span>
                        </div>
                    </section>
                </div>


                {/* Нижний хедер */}
                <div className='headerParentBottom'>
                    <section className='headerBottom'>
                        <div className='headerBottomLogo'>
                            <a href='#'>
                                <img src={logo} alt={"logo"} />
                            </a>
                        </div>
                        <div className='headerBottomNav'>
                            <ul className='headerBottomNavList'>
                                <li><a href='#'>HOME</a></li>
                                <li><a href='#'>CLASSES</a></li>
                                <li><a href='#'>COACHES</a></li>
                                <li><a href='#'>BLOG</a></li>
                                <li><a href='#'>CONTACTS</a></li>
                            </ul>
                        </div>
                        <div className='headerBottomIcons'>
                            <ul className='headerBottomIconsList'>
                                <li><a className='hoverEffect' href='#'><FontAwesomeIcon icon={faFacebookF} /></a></li>
                                <li><a className='hoverEffect' href='#'><FontAwesomeIcon icon={faTwitter} /></a></li>
                                <li><a className='hoverEffect' href='#'><FontAwesomeIcon icon={faInstagram} /></a></li>
                                <li><a className='hoverEffect' href='#'><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                                <li><a className='hoverEffect' href='#'><FontAwesomeIcon icon={faPinterest} /></a></li>
                            </ul>
                        </div>
                    </section>
                </div>
            </header>

        </div>
    );
};

export default Header;