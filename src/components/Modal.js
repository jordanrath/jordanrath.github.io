import React from 'react';
import ReactModal from 'react-modal';
import Carousel from '../components/Carousel.js'

ReactModal.setAppElement('#root')

//we alias the props in the props object so that we can use them elsewhere without conflict
const Modal = ({ data, isOpen: openModal, onRequestClose: handleCloseModal }) => {
    //destructuring properties off of 'data' or an empty object if data is undefined or null using (nullish coelescnce)
    //can use aliasing and defaulting on destructures
    //in this case we default images to an empty array
    // const { faAngleLeft, faAngleRight } = FontAwesomeIcon;
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
{/* render the carousel instead of the image tag will have to have classNames, etc to style itself...
the props sent through the Carousel component will be handled in Carousel.js...
add alts as well

//embed carousel component in the modal and provide the images to it, then provide 
the carousel a className that will reflexively style it to fit in the modal...*/}
              <Carousel imgClassName='modal-img' images={images} className='modal-img-cnt' iconLeft="fa-solid fa-angle-left" iconRight="fa-solid fa-angle-right" aosEffect="zoom-in" aosImgEffect="flip-up" aosDuration="500" />
              {/* <img className='modal-img' src={currentImage} alt='Band Store Project Front Page'/> */}
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
