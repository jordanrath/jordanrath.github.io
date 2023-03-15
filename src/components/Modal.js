import React from 'react';
import ReactModal from 'react-modal';
import Carousel from '../components/Carousel.js'

ReactModal.setAppElement('#root')

const Modal = ({ data, isOpen: openModal, onRequestClose: handleCloseModal }) => {
    const { subtitle, title, images=[], href, github } = (data ?? {});

    return (
        <div> 
            <ReactModal 
               isOpen={openModal}
               contentLabel="Project Description Modal"
               onRequestClose={handleCloseModal}
               className="modal"
               overlayClassName="modal__overlay"
            >
              <Carousel 
                imgClassName='modal__img' 
                isOpen={openModal}
                data={images} 
                className='carousel' 
                iconLeft="fa-solid fa-arrow-left" 
                iconRight="fa-solid fa-arrow-right" 
                aosEffect="zoom-in-up"
                aosImgEffect="fade-left"
                aosDuration="500"
                aosEasing="ease-in-sine" 
              />
              <div className="modal__content">
              <div className='modal__title'>
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
              </div>
              <div className='modal-btn__container'>
                <div className="modal-btn__navigate-flex">
                  <div className='modal-btn__navigate-container'>
                    <a href={href} target="_blank" rel="noreferrer">
                      See {title} in action!
                      <button  className='modal-btn__navigate'>VIEW PROJECT</button>
                    </a>
                  </div>
                  <div className="modal-btn__github-container">
                    <a href={github} target="_blank" rel="noreferrer">
                      Check out {title}'s code.
                      <button  className='modal-btn__navigate'>VIEW PROJECT</button>
                    </a>
                  </div>
                </div>
                <div className='modal-btn__close-container'>
                  <button onClick={handleCloseModal} className='modal-btn__close'>X</button>
                </div>
              </div>
              </div> 
            </ReactModal>
        </div>
    );
}

export default Modal
