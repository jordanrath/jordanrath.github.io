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
      <h3 data-aos="zoom-in-down">Hello, I'm Jordan Rath</h3>
      <h3 data-aos="zoom-in-down">a developer</h3>
      <div className='about-context'>
        <div className='about-image-container' data-aos={aosImgEffect}>
          {/* <img data-aos="zoom-in-down" className='about-image' src='/images/myImage.jpg' alt='My dog Cooper and I'></img> */}
          <ImageLoader 
            src={src} 
            placeholderImage={placeholderImage}
            alt={alt}
            imgClassName={imgClassName}
            aosImgEffect={aosImgEffect}
          />
        </div>
       <div data-aos="zoom-in-down" className='about-text'>
          <p>I'm a full stack developer from Colorado who has a passion for programming and problem solving.  I've spent the last few 
            years studying different types of programming and developement while I was a full time Personal Trainer.  When I'm not writing code you can find me out in the mountains hiking, snowboarding,
            or fishing. 
          </p>
        </div> 
      </div>
    </div>
  )
}

export default About