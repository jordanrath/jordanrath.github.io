import { React, useCallback } from 'react'
import { links } from '../data/appLinks'
import Menu from './Menu'
import NavbarLink from './NavbarLink'

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
    <nav className='navbar sticky'>
      <div data-aos="fade-down" className='navTitle'>
        <div>
          {/* <Menu showMenu={true}/> */}
          {linkJsx}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
