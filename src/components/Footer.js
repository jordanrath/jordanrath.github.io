import React from 'react'
import Clock from './Clock.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <div className='footer footer-div' id='footer'>
      <div className='author-div' data-aos="fade-down-left" data-aos-offset='100'>
        <p>@2022 Jordan Rath</p>
      </div>
      <div className='contact-info-div' data-aos="flip-left" data-aos-offset='50'>
        <a id='profile-link' className='contact-info' href="https://github.com/jordanrath?tab=projects" target="_blank" rel="noreferrer"><FontAwesomeIcon icon="fa-brands fa-github-square" />GitHub</a>
        {/* <a id='profile-link' className='contact-info' href="tel:7013202755" target="_blank" rel="noreferrer"><FontAwesomeIcon icon="fa-solid fa-mobile-screen" />Phone</a> */}
        <a id='profile-link' className='contact-info' href="https://www.linkedin.com/in/jordan-rath-75234a249/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon="fa-brands fa-linkedin-in" />LinkedIn</a>
        <a id='profile-link' className='contact-info' href="mailto:rath.jordan@icloud.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon="fa-regular fa-envelope" />Email</a>
      </div>
      <div className='clock-div' data-aos="fade-down-right" data-aos-offset='100'>
        <p><Clock /></p>
      </div>
    </div>
  )
}

export default Footer
