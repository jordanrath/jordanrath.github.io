import React from 'react'
import { useMemo } from 'react'
import { useContext } from 'react'
import { AppContext } from '../contexts/appData'
import Carousel from './Carousel'

const ProjectsCarousel = () => {
    const { projectData } = useContext(AppContext);
    const { id, subtitle, title, description } = projectData;

    // const memoizedMap = useMemo(() => {
    //     projectData.map(({id, subtitle, title, description}, index) => {
    //         console.log(id, title, subtitle)
    //         return (
    //             <>
    //             {(index === id) ? (<div className="carousel-project__info">
    //             <div className="carousel-project__container">
    //               <h2 className='carousel-project__subtitle'> 
    //                 {subtitle}
    //               </h2>
    //               <h1 className='carousel-project__title'>
    //                 {title}
    //               </h1>
    //               <p className='carousel-project__description'>
    //                 {description}
    //               </p>
    //               <a href='#' className='carousel-project__btn'>Button</a>
    //             </div>
    //           </div>) : <button onClick={() => console.log(index)}>BUTT</button>}
    //           </>
    //         )
    // })}, [projectData]);

  return (
    <>
    {/* <div className='carousel'>
        <div className="carousel-project">
          <div className="carousel-project__image">
            <Carousel id={id} className='projects__carousel' imgClassName='projects-image' btnClassName='button__center'  images={projectData} iconLeft="fa-solid fa-angle-left" iconRight="fa-solid fa-angle-right" aosEffect="flip-down"/>
          </div>
          <div className="carousel-project__container">
                  <h2 className='carousel-project__subtitle'> 
                    {subtitle}
                  </h2>
                  <h1 className='carousel-project__title'>
                    {title}
                  </h1>
                  <p className='carousel-project__description'>
                    {description}
                  </p>
                  <a href='#' className='carousel-project__btn'>Button</a>
                </div>
              </div>
        </div> */}
        {/* <Carousel id={id} className='projects__carousel' imgClassName='projects-image' btnClassName='button__center'  images={projectData} iconLeft="fa-solid fa-angle-left" iconRight="fa-solid fa-angle-right" aosEffect="flip-down"/> */}
    </>
  )
}

export default ProjectsCarousel