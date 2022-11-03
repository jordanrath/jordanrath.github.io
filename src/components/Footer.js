import React from 'react'
import Clock from './Clock.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <div className='footer footer-div' id='footer'>
      <div className='contact-info-div' data-aos="flip-left">
        <a id='profile-link' className='contact-info' href="https://github.com/jordanrath?tab=projects" target="_blank" rel="noreferrer"><FontAwesomeIcon icon="fa-brands fa-github-square" />GitHub</a>
        <a id='profile-link' className='contact-info' href="https://www.linkedin.com/in/jordan-rath-75234a249/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon="fa-brands fa-linkedin-in" />LinkedIn</a>
        <a id='profile-link' className='contact-info' href="mailto:rath.jordan@icloud.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon="fa-regular fa-envelope" />Email</a>
      </div>
      <div className='footer-bottom'>
        <div className='author-div' data-aos="fade-down-left">
          <p>@2022 Jordan Rath</p>
        </div>
        <div className='clock-div' data-aos="fade-down-right">
          <p><Clock /></p>
        </div>
      </div>
    </div>
  )
}

export default Footer
