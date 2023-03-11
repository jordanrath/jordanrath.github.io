import React, { useCallback, useMemo, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import ImageLoader from './ImageLoader';

//image supports on load and on error...  hook into in with callback() to set state in component to be 'loaded' 'loading' etc... spinner, color change, etc
const Carousel = ({images, className: classNameProp, imgClassName, iconLeft, iconRight, btnClassName, aosEffect, aosImgEffect, aosDuration }) => {
    const [current, setCurrent] = useState(0);
    const length = images.length;
    const className = classNames(['slider', classNameProp]);
    const leftBtnClass = classNames(['left-arrow', btnClassName]);
    const rightBtnClass = classNames(['right-arrow', btnClassName]);
    

    //add onclick capture for button
    const nextImage = useCallback((event) => {
        event.preventDefault();
        event.stopPropagation();
        setCurrent(current === length - 1 ? 0 : current + 1);
    }, [setCurrent, current, length]);

    const prevImage = useCallback((event) => {
        event.preventDefault();
        event.stopPropagation();
        setCurrent(current === 0 ? length - 1 : current - 1);
    }, [setCurrent, current, length]);

    // create memoized map for images
const memoizedMap = useMemo(() => {
    return (
        <div className={className} data-aos={aosEffect} data-aos-duration={aosDuration}>
            <div className="carousel__nav">
                            {images.length > 1 ? <FontAwesomeIcon className={leftBtnClass} icon={iconLeft} onClickCapture={prevImage}/> : null}
                            <div className='btn-bar'></div>
                            {images.length > 1 ? <FontAwesomeIcon className={rightBtnClass} icon={iconRight} onClickCapture={nextImage}/> : null}
                        </div>
            {images.map(({ image, alt, placeholderImage, subtitle, title, description }, index) => {
                return (  
                    <> 
                        {index === current && (
                        <div className='carousel-project' key={index}>
                            <div key={index} className={index === current ? `carousel-project__image slide active ${index}` : 'slide'} data-aos="fade-left" data-aos-easing="ease-in">
                                <ImageLoader 
                                    src={image} 
                                    placeholderImage={placeholderImage} 
                                    alt={alt} 
                                    imgClassName={imgClassName} 
                                /> 
                            </div>
                            <div className="carousel-project__container">
                              <h2 className='carousel-project__subtitle'> 
                                {subtitle}
                              </h2>
                              <h1 className='carousel-project__title' data-aos="fade-down" data-aos-easing="ease-in">
                                {title}
                              </h1>
                              <p className='carousel-project__description' data-aos="fade-down" data-aos-easing="ease-in">
                                {description}
                              </p>
                              <a href='/' className='carousel-project__btn'>Button</a>
                            </div>
                        </div>)}
                    </>    
                )
            })}
        </div>
    )
}, [images, current, className, nextImage, prevImage, imgClassName, iconLeft, iconRight, leftBtnClass, rightBtnClass, aosEffect, aosDuration]);

if (!Array.isArray(images) || images.length <= 0) {
    return null;
}

    return (
        <>
            {memoizedMap}
        </>
    )
};

export default Carousel;

