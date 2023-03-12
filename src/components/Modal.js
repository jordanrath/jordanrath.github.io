import React from 'react';
import ReactModal from 'react-modal';
import Carousel from '../components/Carousel.js'

ReactModal.setAppElement('#root')

const Modal = ({ data, isOpen: openModal, onRequestClose: handleCloseModal }) => {
    const { subtitle, title, description, images=[], href } = (data ?? {});

    return (
        <div> 
            <ReactModal 
               isOpen={openModal}
               contentLabel="Project Description Modal"
               onRequestClose={handleCloseModal}
               className="modal"
               overlayClassName="modal__overlay"
               subtitle={subtitle}
               title={title}
               description={description}
            >
              <Carousel 
                imgClassName='modal__img' 
                isOpen={openModal} 
                data={images} 
                className='modal-img__container' 
                iconLeft="fa-solid fa-arrow-left" 
                iconRight="fa-solid fa-arrow-right" 
                aosEffect="zoom-in-up"
                aosImgEffect="fade-left"
                aosDuration="500"
                aosEasing="ease-in-sine" 
              />
              <div className='modal__title'>
                <h2>{subtitle}</h2>
                <h1>{title}</h1>
              </div>
              <div className='modal__description'>
                <p>
                  {description}
                </p>
              </div>
              <div className='modal-btn__container'>
                <div className='modal-btn__navigate-container'>
                  <a href={href} target="_blank" rel="noreferrer">
                  <button  className='modal-btn__navigate'>VIEW PROJECT</button>
                  </a>
                </div>
                <div className='modal-btn__close-container'>
                  <button onClick={handleCloseModal} className='modal-btn__close'>X</button>
                </div>
              </div>
            </ReactModal>
        </div>
    );
}

export default Modal
