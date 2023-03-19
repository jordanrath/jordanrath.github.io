import React from 'react';
import ImageLoader from '../components/ImageLoader';
// import image from '/public/images/myImage.jpg';
// import placeholderImage from '/public/images/myImage_small.jpg';

const About = () => {
  const src = '/images/myImage.jpg';
  const placeholderImage = '/images/myImage_small.jpg';
  const alt = 'My dog Cooper and I';
  const imgClassName = 'about-image' ;
  const aosImgEffect = "zoom-in" ;

  return (
    <div className='about about-div section' id='about'>
      <div className="about-title__container">
        <h3 data-aos="flip-down" data-aos-duration="800">Welcome</h3>
        <span data-aos="zoom-in-down" data-aos-duration="800">.</span>
      </div>
      <div className='about-context'>
        <div className='about-image__container'>
          <ImageLoader 
            src={src} 
            placeholderImage={placeholderImage}
            alt={alt}
            imgClassName={imgClassName}
            aosImgEffect={aosImgEffect}
          />
        </div>
       <div className='about-text' data-aos="fade-in">
          <p>I'm Jordan.  I am from Colorado and I have a passion for programming and problem solving.  I've spent the last few 
            years studying different types of programming and developement while I was a full time Personal Trainer.  When I'm not writing 
            code you can find me hiking, snowboarding or fishing in the Colorado mountains. 
          </p>
        </div> 
      </div>
    </div>
  )
}

export default About