import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

import logo from '../assets/images/logo.png';

function Footer() {
  return (
    <div className='footer-container'>
      
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <h4>
            Little Mister Sunshine Nigeria 2021 Contest is strictly an online competition 
            that is open to Nigerian Male Children from Ages 0 – 8 years old,
             living within and outside Nigeria.  

            </h4>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link  to={{ pathname: 'https://wa.me/message/JK5MG4SP7XZNJ1'}} target='_blank'>Contact</Link>
            <Link to={{ pathname: 'https://wa.me/message/JK5MG4SP7XZNJ1'}} target='_blank'>Support</Link>
            {/* <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link> */}
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Register</h2>
            <Link to='/sign-up'>Submit Video</Link>
            
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to={{ pathname: 'https://www.instagram.com/sunshine_nigeria_foundation/'}} target='_blank'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              {/* FLICKER Rave
              <i class='fab fa-typo3' /> */}
              <img src={logo} alt="logo" width="130" height="40" />
            </Link>
          </div>
          <small class='website-rights'>LittleMisterSunshine © {1900 + new Date().getYear()}</small>
          <div class='social-icons'>
            {/* <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link> */}
            <Link
              class='social-icon-link instagram'
              to={{ pathname: 'https://www.instagram.com/sunshine_nigeria_foundation/'}}
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link class='social-icon-link whatsapp'
            to={{ pathname: 'https://wa.me/message/JK5MG4SP7XZNJ1'}}
            target='_blank'
            aria-label='WhatsApp'
            >
              <i class='fab fa-whatsapp' />
            </Link>
            {/* <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link> */}
            {/* <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link> */}
            {/* <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link> */}
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;