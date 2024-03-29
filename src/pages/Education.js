import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Carousel from '../components/Carousel';
import { AppContext } from '../contexts/appData';

const Education = () => {
  //fetch the data from educationData from context...
  const { educationData } = useContext(AppContext);

  return (
    <div className='education__container'>
       <div className='education__certs'>
          <div className='education__title-certs'>
          {/* <img className='slash__background' src='/svg/slashes.svg' alt='Slash background'/>   */}
            <div className="education__title-text">         
              <h2 data-aos="fade-in">
                My Certifications
              </h2>
              <span data-aos="zoom-in-down">.</span>
            </div>
              <div className='education__bar' data-aos="fade-right"></div>
              <p data-aos="fade-in">
                Here are the certifications I have earned over the last few years, I am always looking for new ways to learn and grow as a developer.
              </p> 
          </div>
          <Carousel 
            className='carousel' 
            imgClassName='projects-image' 
            btnClassName='button__center'  
            data={educationData} 
            iconLeft="fa-solid fa-arrow-left" 
            iconRight="fa-solid fa-arrow-right" 
            aosEffect="zoom-in-up"
            aosImgEffect="fade-left"
            aosDuration="750"
            aosEasing="ease-in-out"
          />
        </div> 
        <div className='education__technologies'>
          <div className="education__svg-container">
              <img className='education__svg' src='/svg/My project (5).png' alt='Computer Languages' data-aos="fade-in" />
              </div>
            <div className="education__title-container">
              <div className='education__title-tech'>
                <div className='education__title-text'>
                  <h2 data-aos="fade-in">Languages and Frameworks</h2>
                  <span data-aos="zoom-in-down">.</span>
                </div>
              </div>      
            <div className='education__languages'>
              <ul className='education__languages-top' data-aos="fade-in">
                <li>
                  <FontAwesomeIcon className='svgIcon' icon="fa-brands fa-js-square" />
                  Javascript
                </li>
                <li>
                  <FontAwesomeIcon className='svgIcon' icon="fa-brands fa-react" />
                  React
                </li>
                <li>
                  <FontAwesomeIcon className='svgIcon' icon="fa-brands fa-node-js" />
                  Node.js
                </li>
                <li>
                  <FontAwesomeIcon className='svgIcon' icon="fa-brands fa-html5" />
                  HTML
                </li>
                <li>
                  <FontAwesomeIcon className='svgIcon' icon="fa-brands fa-css3-alt" />
                  CSS
                </li>
              </ul>
              <ul className="education__languages-bottom" data-aos="fade-in">
                <li>
                  <FontAwesomeIcon className='svgIcon' icon="fa-brands fa-bootstrap" />
                  Bootstrap
                </li>
                <li>
                  <FontAwesomeIcon className='svgIcon' icon="fa-brands fa-python" />
                  Python
                </li>
                <li>
                  <img className='svgIcon iconColor' src='/icons/express-js-icon.svg' alt='Express DB Logo' />
                  Express
                </li>
                <li>
                  <img className='svgIcon iconColor' src='/icons/mongodb-svgrepo-com.svg' alt='Mongo DB Logo' />
                  MongoDB
                </li>
              </ul>
            </div>
            </div>
        </div>
        <div className='education__skills'>
          <div className="education__svg-container">
            <img className='education__svg' src='/svg/My project (6).png' alt='Computer Languages' data-aos="fade-in" />
          </div>
          <div className="education__title-skills">
            <div className="education__title-container">
              <div className="education__title-text">
                <h2 data-aos="fade-in">
                  Skills and Strengths
                </h2>
                <span data-aos="zoom-in-down">.</span>
              </div>
            </div>
            <div className="education__skills-list">
              <ul className='education__skills-list-top' data-aos="fade-in">
                <li>
                  <FontAwesomeIcon className='svgIcon' icon="fa-solid fa-arrow-right-to-bracket" />
                  Desire to learn
                </li>
                <li>
                  <FontAwesomeIcon className='svgIcon' icon="fa-solid fa-arrow-right-to-bracket" />
                  Emphasis on quality
                </li>
                <li>
                  <FontAwesomeIcon className='svgIcon' icon="fa-solid fa-arrow-right-to-bracket" />
                  Working with a team
                </li>
                <li>
                  <FontAwesomeIcon className='svgIcon' icon="fa-solid fa-arrow-right-to-bracket" />
                  Concise communication
                </li>
              </ul>
              <ul className='education__skills-list-bottom' data-aos="fade-in">
                <li>
                  <FontAwesomeIcon className='svgIcon' icon="fa-solid fa-arrow-right-to-bracket" />
                  Responsive design
                </li>
                <li>
                  <FontAwesomeIcon className='svgIcon' icon="fa-solid fa-arrow-right-to-bracket" />
                  Functional components
                </li>
                <li>
                  <FontAwesomeIcon className='svgIcon' icon="fa-solid fa-arrow-right-to-bracket" />
                  Strong work ethic
                </li>
                <li>
                  <FontAwesomeIcon className='svgIcon' icon="fa-solid fa-arrow-right-to-bracket" />
                  Problem-solving
                </li>
              </ul>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Education;
