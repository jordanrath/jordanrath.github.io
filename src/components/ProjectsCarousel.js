import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../contexts/appData'
import Carousel from './Carousel'

const ProjectsCarousel = () => {
    const { projectData } = useContext(AppContext);

  return (
    <>
        <Carousel className='projects__carousel' imgClassName='projects-image' btnClassName='button__center'  images={projectData} iconLeft="fa-solid fa-angle-left" iconRight="fa-solid fa-angle-right" aosEffect="flip-down"/>
        {/* <div className="projects__carousel-nav">
            <span id="moveLeft" class="carousel__arrow">
                <svg class="carousel__icon" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"></path>
                </svg>
            </span>
            <span id="moveRight" class="carousel__arrow" >
              <svg class="carousel__icon"  width="24" height="24" viewBox="0 0 24 24">
                    <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path>
                </svg>
            </span>   
        </div> */}
    </>
  )
}

export default ProjectsCarousel