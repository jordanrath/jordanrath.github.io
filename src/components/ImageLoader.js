import React, { useEffect, useState } from 'react';

const ImageLoader = ({ placeholderImage, src, alt, imgClassName, aosImgEffect }) => {
  const [imgSrc, setImgSrc] = useState(placeholderImage || src);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImgSrc(src);
    };
  }, [src]);

  // useEffect(() => {
  //   const img = new Image();
  //   img.onerror = (e) => {
  //     debugger;
  //   }
  //   img.onload = (e) => {
  //     debugger;
  //     setImgSrc(src);
  //   };
  //   img.src = src;
  // }, [src]);

  const customClass = (placeholderImage && imgSrc === placeholderImage ? "loading" : "loaded");
  
    return (
    <>
      <img
      src={imgSrc}
      alt={alt || ''}
      className={`${imgClassName} ${customClass}`}
      // data-aos={aosImgEffect}
      />
    </>
  )
}

export default ImageLoader;