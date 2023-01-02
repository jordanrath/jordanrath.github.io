import React from 'react'

const Loader = () => {

  const loader = document.querySelector('.loader');
  const showLoader = () => loader.classList.remove('loader--hide');
  const hideLoader = () => loader.classList.add('loader--hide');

  return (
    <div class="loader"><div></div><div></div><div></div><div></div></div>
  )
}

export default Loader