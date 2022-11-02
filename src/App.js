 import React, { useEffect } from 'react';
 import { useInView } from 'react-intersection-observer';
 import './components/FontAwesomeIcons';
 import AOS from "aos";
 import "aos/dist/aos.css";
 import Navbar from "./components/Navbar";
 import About from "./pages/About";
 import Projects from './pages/Projects';
 import Education from './pages/Education';
 import Contact from './pages/Contact';
 import Footer from "./components/Footer";
import BackgroundSelector from './components/BackgroundSelector';
 

const App = () => {

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 500,
      offset: 100,
      easing: 'ease-in-out-sine',
    });
    AOS.refresh();
  }, []);
  
  let options = {
    threshold: .75,
  };
   const { ref: aboutRef, inView: onAbout } = useInView(options);
   const { ref: imagesRef, inView: onImages } = useInView(options);
   const { ref: projectsRef, inView: onProjects } = useInView(options);
   const { ref: contactRef, inView: onContact } = useInView(options);

   const refProps = {
     onAbout,
     onImages,
     onProjects,
     onContact,
   }

   return (
    <main id='home'>
      <Navbar {...refProps}/>
      <BackgroundSelector />
      <section className='about' id='about' ref={aboutRef}>
        <About />
      </section>
      <section className='education' id='education' ref={imagesRef}>
        <Education />
      </section> 
      <section className='projects' id='projects' ref={projectsRef}>
        <Projects />
      </section>
      <section className='contact' id='contact' ref={contactRef}>
        <Contact />
      </section>
      <section className='footer'>
        <Footer />
      </section>     
    </main>
   )
}

 export default App;
