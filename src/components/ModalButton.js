import React from 'react'
import { useCallback } from 'react';
import { useMemo } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { AppContext } from '../contexts/appData';
import Modal from './Modal';

const ModalButton = (props) => {
    const [openModal, setOpenModal] = useState(false);
    const { className } = props;

    //set state to tell react which project is open and what to display as the modal content
    //null is the 'explicit lack of a value'
    //undefined is the 'accidental lack of a value'
    //tracks the identifying information on the button that was clicked
    const [openedProjectID, setOpenedProjectID] = useState(null);
  
    //destructuring a new const of 'modalData' from the result of the useContext() hook
    const { modalData } = useContext(AppContext);
  
      const handleOpenModal = useCallback((event) => {
        event.preventDefault();
        //use optional dot chaining and nullish coalescing to confirm there is a 'project-id' attribute
        const projectID = event?.currentTarget?.attributes?.getNamedItem('project-id')?.value ?? null;
        const rawID = parseInt((projectID), 10);
        const projectClickedID = (!Number.isNaN(rawID) ? rawID : null);
        setOpenedProjectID(projectClickedID);
        setOpenModal(true);
          console.log(event.currentTarget);
      }, [setOpenModal]);
  
      const handleCloseModal = useCallback(() => {
        setOpenModal(false);
        setOpenedProjectID(null);
      }, [setOpenModal]);
  
      //declare a const whose value will be recomputed only when the scoped dependencies change and the value
      //will be the return value of the "factory function" passed to the useMemo() hook
      //Factory Function - any function that can produce another object... in this case it's being used to produce a memoized object  
      const modalJSX = useMemo(() => {
        //create a variable that tells react which project was clicked using positional accessor (index)
        const projectData = modalData.find(({ id }) => id === openedProjectID);
  
        //data equals the project clicked if that project has an id  then projectData otherwise null
        const data = (projectData && projectData.id ? projectData : null);
        return (
          <Modal data={data} isOpen={openModal} onRequestClose={handleCloseModal} />
        )
      }, [modalData, openModal, handleCloseModal, openedProjectID]);




  return (
    <>
        {modalJSX}
        <button onClick={handleOpenModal} project-id='1' className='carousel-project__btn'>LEARN MORE</button>
    </>
  )
}

export default ModalButton