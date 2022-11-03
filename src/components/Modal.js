import React from 'react';
import ReactModal from 'react-modal';
import Carousel from '../components/Carousel.js'

ReactModal.setAppElement('#root')

const Modal = ({ data, isOpen: openModal, onRequestClose: handleCloseModal }) => {
    const { name, description, images=[], href } = (data ?? {});

    return (
        <div> 
            <ReactModal 
               isOpen={openModal}
               contentLabel="Project Description Modal"
               onRequestClose={handleCloseModal}
               className="modal"
               overlayClassName="overlay"
            >
              <Carousel imgClassName='modal-img' images={images} className='modal-img-cnt' iconLeft="fa-solid fa-angle-left" iconRight="fa-solid fa-angle-right" aosEffect="zoom-in" aosImgEffect="flip-up" aosDuration="500" />
              <div className='project-title'>
                <h2>{name}</h2>
              </div>
              <div className='modal-description'>
                <p>
                  {description}
                </p>
              </div>
              <div className='modal-btn-container'>
                <div className='view-project-btn'>
                  <a href={href} target="_blank" rel="noreferrer">
                  <button  className='view-project'>VIEW PROJECT</button>
                  </a>
                </div>
                <div className='close-modal-btn'>
                  <button onClick={handleCloseModal} className='close-modal'>X</button>
                </div>
              </div>
            </ReactModal>
        </div>
    );
}

export default Modal
