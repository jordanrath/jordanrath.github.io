import React, { useCallback, useMemo, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import ImageLoader from './ImageLoader';
import ModalButton from './ModalButton';
import Modal from './Modal';

//image supports on load and on error...  hook into in with callback() to set state in component to be 'loaded' 'loading' etc... spinner, color change, etc
const Carousel = ({data, isOpen, className: classNameProp, imgClassName, iconLeft, iconRight, btnClassName, handleCloseModal, href, aosEffect, aosImgEffect, aosDuration, aosEasing }) => {
    const [current, setCurrent] = useState(0);
    const length = data.length;
    const className = classNames([classNameProp]);
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

    // create memoized map for data
const memoizedMap = useMemo(() => {
    return (
        <div className={className} > 
            <div className="carousel__nav">
                {
                    length > 1 
                    ? 
                        <FontAwesomeIcon 
                            className={leftBtnClass} 
                            icon={iconLeft} 
                            onClickCapture={prevImage}
                        /> 
                    : 
                        null
                }
                <div className='btn-bar'></div>
                {
                    length > 1 
                    ? 
                        <FontAwesomeIcon  
                            className={rightBtnClass} 
                            icon={iconRight} 
                            onClickCapture={nextImage}
                        /> 
                    : 
                        null
                }
            </div>
            {data.map(({ 
                imageShown, 
                image, 
                alt, 
                placeholderImage, 
                subtitle, 
                title, 
                description, 
                id 
            }, index) => {
                return (  
                    <React.Fragment key={index}> 
                        {index === current && !isOpen && (
                        <div 
                            className={index === current ? 'carousel-project active' : 'carousel-project'} 
                            key={`Project - ${index}`}
                        >
                            <div    
                                className='carousel-project__image'
                                data-aos={aosImgEffect}
                                data-aos-duration={aosDuration}
                                data-aos-easing={aosEasing}
                            >
                                {
                                    <ImageLoader 
                                        src={imageShown} 
                                        placeholderImage={placeholderImage} 
                                        alt={alt} 
                                        imgClassName={imgClassName}
                                    />
                                } 
                            </div>
                            <div className="carousel-project__container">
                                <div 
                                    className="carousel-project__info" 
                                    data-aos={aosEffect}
                                    data-aos-duration={aosDuration} 
                                    data-aos-easing={aosEasing}
                                >
                                    <h2 className='carousel-project__subtitle'> 
                                      {subtitle}
                                    </h2>
                                    <h1 className='carousel-project__title'>
                                      {title}
                                    </h1>
                                    <p className='carousel-project__description'>
                                      {description}
                                    </p>
                                    <ModalButton 
                                        className='carousel-project__btn' 
                                        id={id} 
                                    />
                                </div>
                            </div>
                        </div>)}

                        {index === current && isOpen && (
                        <div 
                            className={index === current ? 'carousel-project active' : 'carousel-project'} 
                            key={ `Modal - ${index}`}
                        >
                            <div   
                                className='carousel-project__image'
                                data-aos={aosImgEffect}
                                data-aos-duration={aosDuration}
                                data-aos-easing={aosEasing}
                            >
                                {
                                    <ImageLoader 
                                        src={image} 
                                        placeholderImage={placeholderImage} 
                                        alt={alt} 
                                        imgClassName={imgClassName}
                                    />
                                } 
                            </div>
                                <Modal />
                        </div>)}
                    </React.Fragment>    
                )
            })}
        </div>
    )
}, [data, current, length, className, isOpen, nextImage, prevImage, imgClassName, iconLeft, iconRight, leftBtnClass, rightBtnClass, aosEffect, aosImgEffect, aosDuration, aosEasing]);

if (!Array.isArray(data) || data.length <= 0) {
    return null;
}

    return (
        <>
            {memoizedMap}
        </>
    )
};

export default Carousel;


// <div className='modal__title'>
// <h2>{subtitle}</h2>
// <h1>{title}</h1>
// </div>
// <div className='modal__description'>
// <p>
//   {description}
// </p>
// </div>
// <div className='modal-btn__container'>
// <div className='modal-btn__navigate-container'>
//   <a href={href} target="_blank" rel="noreferrer">
//     <button  className='modal-btn__navigate'>VIEW PROJECT</button>
//   </a>
// </div>
// <div className='modal-btn__close-container'>
//   <button onClick={handleCloseModal} className='modal-btn__close'>X</button>
// </div>
// </div> 