import { React, useCallback } from 'react';
import { links } from '../data/appLinks';
import MenuOpen from './MenuOpen';
import NavbarLink from './NavbarLink';
import ThemeButton from './ThemeButton';

const Navbar = (props) => {
  //create a callback to locate the correct data for smooth scroll and offset for Navbar
  const resetScrollOnClick = useCallback((event) => {
    event.preventDefault()
    const target = event.target.getAttribute('href')
    const location = document.querySelector(target).offsetTop

    window.scrollTo({
      left: 0,
      top: location - 64
    })
  }, [])

  //store the click events in a single useCallback to use them together
  const onClick = useCallback((event) => {
    event.preventDefault();
    resetScrollOnClick(event)
  }, [resetScrollOnClick]);

  //create a variable containing the data from links and spread it into an object {linkProps}
  const linkJsx = links.map((link) => {
    const linkProps = {
      ...link,
      ...props, 
      onClick,
      key: `nbl-${link.id}`,
    };          

    //render NavBarLink and spread the object {linkProps} into it as props
    return (
      <NavbarLink {...linkProps} />
    )
  });
  
  return (
    <>
      <div className="bar__top"></div>
      <div className="bar__left"></div>
      <div className="bar__right"></div>
      <div className='navbar'>
        {/* <div data-aos="fade-down" className='nav-title'> */}
          <div className='nav-title__right'>
            <ThemeButton />
          </div>
          <div className="nav-title__left">
            <MenuOpen showMenu={true} links={linkJsx}/>
            {/* {linkJsx} */}
          </div>
        {/* </div> */}
      </div>
    </>
  )
}

export default Navbar
