import React from 'react'
import { useCallback } from 'react';
import { useMemo } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { AppContext } from '../contexts/appData';
import Modal from './Modal';

const ModalButton = (props) => {
    const [openModal, setOpenModal] = useState(false);
    const { className, id } = props;

    //set state to tell react which project is open and what to display as the modal content
    const [openedProjectID, setOpenedProjectID] = useState(null);
  
    //destructuring a new const of 'projectData' from the result of the useContext() hook
    const { projectData } = useContext(AppContext);
  
      const handleOpenModal = useCallback((event) => {
        event.preventDefault();
        const projectID = event?.currentTarget?.attributes?.getNamedItem('project-id')?.value ?? null;
        const rawID = parseInt((projectID), 10);
        const projectClickedID = (!Number.isNaN(rawID) ? rawID : null);
        setOpenedProjectID(projectClickedID);
        setOpenModal(true);
      }, [setOpenModal]);
  
      const handleCloseModal = useCallback(() => {
        setOpenModal(false);
        setOpenedProjectID(null);
      }, [setOpenModal]);
  
      //will be the return value of the "factory function" passed to the useMemo() hook 
      const modalJSX = useMemo(() => {

        //create a variable that tells react which project was clicked using positional accessor (index)
        const modalData = projectData.find(({ id }) => id === openedProjectID);
  
        //data equals the project clicked if that project has an id  then modalData otherwise null
        const data = (modalData && modalData.id ? modalData : null);

        return (
          <Modal 
            data={data} 
            isOpen={openModal} 
            onRequestClose={handleCloseModal}
          />
        )
      }, [projectData, openModal, handleCloseModal, openedProjectID]);

  return (
    <>
        {modalJSX}
        <button 
          onClick={handleOpenModal} 
          project-id={id} 
          className={className}
        >
          LEARN MORE
        </button>
    </>
  )
}

export default ModalButton