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

const memoizedMap = useMemo(() => {
    return (
        <div className={className} data-aos={aosEffect} data-aos-duration={aosDuration}>
            {images.map(({ image, alt, placeholderImage }, index) => {
                return (
                    <div
                        className={index === current ? 'slide active' : 'slide'}
                        key={index}
                        >
                        {index === current && (
                        <ImageLoader 
                            src={image} 
                            placeholderImage={placeholderImage} 
                            alt={alt} 
                            imgClassName={imgClassName} 
                        />)}   
                        <div className='carousel-circles-div'>
                        </div>
                    </div>         
                )
            })}
            <FontAwesomeIcon className={leftBtnClass} icon={iconLeft} onClickCapture={prevImage}/>
            <FontAwesomeIcon className={rightBtnClass} icon={iconRight} onClickCapture={nextImage}/>
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

export default Carousel
