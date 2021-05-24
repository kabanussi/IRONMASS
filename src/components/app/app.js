import React, { Component } from 'react';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faPhone, faSearch } from '@fortawesome/free-solid-svg-icons';
import logo from './img/logo.png';


import './app.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <header className='header'>

          {/* Верхний хедер */}
          <div className='header-parent-top'>
            <section className='header-top'>
              <div className='header-top-left'>
                <div className='header-top-content'>
                  <span className='header-top-icon'><FontAwesomeIcon className='header-top-icon__left' icon={faPhone} /></span>
                  <span className='header-top-text'>1-555-644-5566</span>
                </div>
                <div className='header-top-content'>
                  <span className='header-top-icon'><FontAwesomeIcon className='header-top-icon__left' icon={faMapMarkerAlt} /></span>
                  <span className='header-top-text'>Studio City, CA 91604</span>
                </div>
              </div>
              <div className='header-top-right'>
                <span className='header-top-right__icon'>
                  <FontAwesomeIcon className='header-top-icon__right' icon={faSearch} />
                </span>
              </div>
            </section>
          </div>


          {/* Нижний хедер */}
          <div className='header-parent-bottom'>
            <section className='header-bottom'>
              <div className='header-bottom__logo'>
                <a href='#'>
                  <img src={logo} alt={"logo"} />
                </a>
              </div>
              <div className='header-bottom__nav'>
                <ul className='header-bottom__navList'>
                  <li><a href='#'>HOME</a></li>
                  <li><a href='#'>CLASSES</a></li>
                  <li><a href='#'>COACHES</a></li>
                  <li><a href='#'>BLOG</a></li>
                  <li><a href='#'>CONTACTS</a></li>
                </ul>
              </div>
              <div className='header-bottom__icons'>
                <ul className='header-bottom__iconsList'>
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
  }
};