import React from 'react';
import ImageLoader from '../components/ImageLoader';
// import image from '/public/images/myImage.jpg';
// import placeholderImage from '/public/images/myImage_small.jpg';

const About = () => {
  const src = '/images/myImage.jpg';
  const placeholderImage = '/images/myImage_small.jpg';
  const alt = 'My dog Cooper and I';
  const imgClassName = 'about-image' ;
  const aosImgEffect = "zoom-in-down" ;

  return (
    <div className='about about-div section' id='about'>
      <div className="about-title__container">
        <h3 data-aos="zoom-in-down">Welcome</h3>
        <span>.</span>
      </div>
      <div className='about-context'>
        <div className='about-image__container' data-aos={aosImgEffect}>
          <ImageLoader 
            src={src} 
            placeholderImage={placeholderImage}
            alt={alt}
            imgClassName={imgClassName}
          />
        </div>
       <div data-aos="zoom-in-down" className='about-text'>
          <p>Hello, I'm Jordan.  I am from Colorado and I have a passion for programming and problem solving.  I've spent the last few 
            years studying different types of programming and developement while I was a full time Personal Trainer.  When I'm not writing 
            code you can find me hiking, snowboarding or fishing in the Colorado mountains. 
          </p>
        </div> 
      </div>
    </div>
  )
}

export default About