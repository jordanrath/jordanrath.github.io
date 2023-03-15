import React, { useState } from 'react'
import Menu from './Menu';

const MenuOpen = (props) => {
    const[menuOpen, setMenuOpen] = useState(false);
    const { showMenu, links } = props;

  return (
    <div className='menu'>
        <Menu onClick={() => setMenuOpen(!menuOpen)} menuOpen={menuOpen} showMenu={showMenu} />
        <div 
            className="menu__overlay"
            style={{
                top: menuOpen ? "10px" : "-120%",
                transitionDelay: menuOpen ? "0s" : "0s"
            }}
        >
            <button className="menu__buttons" onClick={() => setMenuOpen(!menuOpen)}>{links}</button>
        </div>
    </div>
  )
}

export default MenuOpen