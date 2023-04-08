import React from 'react'

const Loader = ({dotCount = 5, placeholderText = "JR"}) => {

  const finalDotCount = Math.min(Math.max(dotCount, 3), 6)

  const dots = Array.from(Array(finalDotCount)).map((currentValue, currentIndex) => (<div key={`loader-dot-${currentIndex}`}></div>));
  const placeholder = placeholderText;

  return (
    <>
      <div className="bar__top"></div>
      <div className="bar__left"></div>
      <div className="bar__right"></div>
      <div className="bar__bottom"></div>
      <div className='loader-container'>
        <div className="logo">{placeholder}</div>
        <div className="loader">{dots}</div>
      </div>
    </>
  )
}

export default Loader