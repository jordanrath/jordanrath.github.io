import React, {useMemo} from 'react';
import { useContext } from 'react';
import Carousel from '../components/Carousel';
import { AppContext } from '../contexts/appData';

const Projects = () => {
  const { projectData } = useContext(AppContext);
  
// create useMemo to prevent unneccesary redraws
const children = useMemo(() => {

  return (
    <>  
      <div className="project-header__container">
        <div className='project-title__container'>
          <div className="project-title-bar-image__container">
            <div className="project-title-bar__container">
              <div className="project-title__text">
                <h2 data-aos="fade-in">Projects</h2>
                <span data-aos="zoom-in-down">.</span>
              </div>
              <div className='project-header-bar header-bar' data-aos="fade-right"></div>
            </div>
            <img className='project__svg' src='/svg/projects-icon.png' alt="Projects Computer" />
          </div>
          <p data-aos="fade-in">Check out a few of the projects I've built.</p>
        </div>
      </div>
      <div className='project-header-bar header-bar' data-aos="fade-left"></div>
      <Carousel 
        className='carousel' 
        imgClassName='projects-image' 
        btnClassName='button__center'  
        data={projectData} 
        iconLeft="fa-solid fa-arrow-left" 
        iconRight="fa-solid fa-arrow-right" 
        aosEffect="zoom-in-up"
        aosImgEffect="fade-left"
        aosDuration="500"
        aosEasing="ease-in-sine"
      />
    </>
  );
}, [projectData]);
  
  return (
    <div className='projects-section section' id='projects'>
      {children}
    </div>
   ) 
}

export default Projects
