import React, { useCallback, useMemo, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

//-----------------To Do 8/14/22----------------//
//Memoize the array.map()... right now it calls .map on every render...
//put github links on project modals...
//add the initial size and on error state and on load spinner to the image
//image supports on load and on error...  hook into in with callback() to set state in component to be 'loaded' 'loading' etc... spinner, color change, etc
const Carousel = ({ data, images, className: classNameProp, imgClassName, iconLeft, iconRight, btnClassName, aosEffect, aosImgEffect, aosDuration }) => {
    const [current, setCurrent] = useState(0);
    const length = images.length;
    const className = classNames(['slider', classNameProp]);
    const leftBtnClass = classNames(['left-arrow', btnClassName]);
    const rightBtnClass = classNames(['right-arrow', btnClassName]);
    

    //add onclick capture
    const nextImage = useCallback((event) => {
        event.preventDefault();
        event.stopPropogation();
        setCurrent(current === length - 1 ? 0 : current + 1);
    }, [setCurrent, current, length]);

    const prevImage = useCallback((event) => {
        event.preventDefault();
        event.stopPropogation();
        setCurrent(current === 0 ? length - 1 : current - 1);
    }, [setCurrent, current, length]);

const memoizedMap = useMemo(() => {
    return (
        <div className={className} data-aos={aosEffect} data-aos-duration={aosDuration}>
            {images.map(({ image, alt }, index) => {
                return (
                    <div
                        className={index === current ? 'slide active' : 'slide'}
                        key={index}
                        >
                        {index === current && (<img src={image} alt={alt} className={imgClassName} data-aos={aosImgEffect} data-aos-duration="300"/>)}   
                        <div className='carousel-circles-div'>
                        </div>
                    </div>         
                )
            })}
            <FontAwesomeIcon className={leftBtnClass} icon={iconLeft} onClickCapture={prevImage}/>
            <FontAwesomeIcon className={rightBtnClass} icon={iconRight} onClickCapture={nextImage}/>
        </div>
      )
    
}, [images, current, className, nextImage, prevImage, imgClassName, iconLeft, iconRight, leftBtnClass, rightBtnClass, aosEffect, aosImgEffect, aosDuration]);

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
