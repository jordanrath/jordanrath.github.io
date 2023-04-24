import React, { useState, useEffect } from 'react'

const NavbarLink = (props) => {
  const [active, setActive] = useState(false);
  const {url, id, onClick, text, onAbout, onImages, onProjects, onContact} = props;
    // todo build active classname using active
  
     useEffect(() => {
        if (onAbout && id === 1) {
         setActive(true);
       } else if (onImages && id === 2) {
        setActive(true);
       } else if (onProjects && id === 3) {
        setActive(true);
       } else if (onContact && id === 4) {
        setActive(true);
       } else {
         setActive(false);
       }
     }, [onAbout, onImages, onProjects, onContact, id]);

  return (
    <>
    <a
      className={active
        ? 'isActive' : ''} 
      href={url} id={id} onClick={onClick}
    >
      {text}
    </a>
    </>
  )
}

export default NavbarLink;
