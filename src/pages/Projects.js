import React, { useCallback, useMemo, useState, useContext } from 'react';
import Modal from '../components/Modal';
import { AppContext } from '../contexts/appData';

const Projects = () => {
  const [openModal, setOpenModal] = useState(false);

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

// create useMemo to prevent unneccesary redraws
const children = useMemo(() => {
  return (
    <>
      {modalJSX}
      <div>
        <h1 data-aos="fade-left">PROJECTS</h1>
        <div className='project-header-bar header-bar' data-aos="fade-right"></div>
      </div>
      <div className='projects-div-frame' >
        <div className='projects-div' data-aos="zoom-out-up">
          <div className='project'>
            <img className='project-img' src='/projectImages/JSwebsite.png' alt='JavaScript Website' />
          <div className='project-context'>
            <h5>Band Website</h5>
            <p>JavaScript / HTML / CSS</p>
            <div className='project-btn-container' id='new'>
              <button onClick={handleOpenModal} project-id='1' className='project-btn'>LEARN MORE</button>
            </div>
          </div>
          </div>
          <div className='project'>
            <img className='project-img' src='/projectImages/JSfoodTracker.png' alt='JavaScript Store' />
          <div className='project-context'>
            <h5>Food Tracker</h5>
            <p>JavaScript / HTML / CSS</p>
            <div className='project-btn-container'>
              <button onClick={handleOpenModal} project-id='2' className='project-btn'>LEARN MORE</button>
            </div>
          </div>
          </div>
          <div className='project'>
            <img className='project-img' src='/projectImages/CRAonlineStore.png' alt='React Food Log' />
          <div className='project-context'>  
            <h5>Online Supermarket</h5>
            <p>ReactJS / HTML / CSS</p>
            <div className='project-btn-container'>
              <button onClick={handleOpenModal} project-id='3' className='project-btn'>LEARN MORE</button>
            </div>
          </div>
          </div>
          <div className='project'>
            <img className='project-img' src='/projectImages/weatherApp.png' alt='JavaScript To Do App' />
          <div className='project-context'>  
            <h5>Weather App</h5>
            <p>ReactJS / CSS</p>
            <div className='project-btn-container'>
              <button onClick={handleOpenModal} project-id='4' className='project-btn'>LEARN MORE</button>
            </div>
          </div>
          </div>
          <div className='project'>
            <img className='project-img' src='/projectImages/pomodoroClock.png' alt='JavaScript Technical Documentation' />
          <div className='project-context'>  
            <h5>Pomodoro Clock</h5>
            <p>ReactJS / CSS</p>
            <div className='project-btn-container'>
              <button onClick={handleOpenModal} project-id='5' className='project-btn'>LEARN MORE</button>
            </div>
          </div>
          </div>
          <div className='project'>
            <img className='project-img' src='/projectImages/JSCalculator.png' alt='JavaScript To Do List' />
          <div className='project-context'>
            <h5>Calculator</h5>
            <p>JavaScript / HTML / CSS</p>
            <div className='project-btn-container'>
              <button onClick={handleOpenModal} project-id='6' className='project-btn'>LEARN MORE</button>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}, [handleOpenModal, modalJSX]);
  
  return (
    <div className='projects-section section' id='projects'>
      {children}
    </div>
   ) 
}

export default Projects