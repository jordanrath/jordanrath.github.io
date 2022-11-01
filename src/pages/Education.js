import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Carousel from '../components/Carousel';
import { AppContext } from '../contexts/appData';

const Education = () => {
  //fetch the data from educationData from context...
  const { educationData } = useContext(AppContext)

  return (
    <div className='education-container'>
        <div className='education-div'>
            <div data-aos="fade-right">
              <h3>Languages and Frameworks</h3>
              <div className='education-bar'></div>
            </div>
            <div className='education-list-div' data-aos="flip-right">
              <ul className='languages'>
                <li><FontAwesomeIcon className='svgIcon' icon="fa-brands fa-js-square" />Javascript</li>
                <li><FontAwesomeIcon className='svgIcon' icon="fa-brands fa-python" />Python</li>
                <li><FontAwesomeIcon className='svgIcon' icon="fa-brands fa-react" />React</li>
                <li><FontAwesomeIcon className='svgIcon' icon="fa-brands fa-html5" />HTML</li>
                <li><FontAwesomeIcon className='svgIcon' icon="fa-brands fa-css3-alt" />CSS</li>
                <li><FontAwesomeIcon className='svgIcon' icon="fa-brands fa-bootstrap" />Bootstrap</li>
                <li><FontAwesomeIcon className='svgIcon' icon="fa-brands fa-node-js" />Node.js</li>
                <li><img className='svgIcon iconColor' src='/icons/express-js-icon.svg' alt='Express DB Logo' />Express</li>
                <li><img className='svgIcon iconColor' src='/icons/mongodb-svgrepo-com.svg' alt='Mongo DB Logo' />MongoDB</li>
              </ul>
            </div>
        </div>
        <div className='cert-div'>
          <div data-aos="fade-down">
              <h3>Certifications</h3>
              <div className='education-bar'></div>
          </div>  
          {/* render Carousel and give it the educationData as props... will need to add unique ID and className as props later... */}
          <Carousel className='image-section' imgClassName='cert-img' btnClassName='center-btn'  images={educationData} iconLeft="fa-solid fa-angle-left" iconRight="fa-solid fa-angle-right" aosEffect="flip-down" />
        </div> 
        <div className='education-div'>
            <div data-aos="fade-left">
              <h3>Skills and Strengths</h3>
              <div className='education-bar'></div>
            </div>
          <div className='education-list-div education-expanded' data-aos="flip-right">
            <ul className='skills'>
              <li><FontAwesomeIcon className='svgIcon' icon="fa-solid fa-arrow-right-to-bracket" />Desire to learn</li>
              <li><FontAwesomeIcon className='svgIcon' icon="fa-solid fa-arrow-right-to-bracket" />Emphasis on quality</li>
              <li><FontAwesomeIcon className='svgIcon' icon="fa-solid fa-arrow-right-to-bracket" />Working with a team</li>
              <li><FontAwesomeIcon className='svgIcon' icon="fa-solid fa-arrow-right-to-bracket" />Clear and concise communication</li>
              <li><FontAwesomeIcon className='svgIcon' icon="fa-solid fa-arrow-right-to-bracket" />Responsive design</li>
              <li><FontAwesomeIcon className='svgIcon' icon="fa-solid fa-arrow-right-to-bracket" />Purely functional components</li>
              <li><FontAwesomeIcon className='svgIcon' icon="fa-solid fa-arrow-right-to-bracket" />Good work ethic</li>
              <li><FontAwesomeIcon className='svgIcon' icon="fa-solid fa-arrow-right-to-bracket" />Problem-solving</li>
            </ul>
          </div>
        </div>
    </div>
  );
};

export default Education;

