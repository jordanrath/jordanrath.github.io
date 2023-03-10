import React from 'react'
import { useState } from 'react'
import BackgroundSelector from './BackgroundSelector';
import Menu from './Menu';

const OpenedMenu = () => {
    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="menu">
        <div className="menu__container">
            <div className="menu_nav">
                <Menu onClick={() => setMenuOpen(!menuOpen)} />
                <div className="nav__left">
                    {!menuOpen ? 'Menu' : 'Close'}
                </div>
                <div className="nav__right">
                    <BackgroundSelector />
                </div>
            </div>
            <div className="menu__overlay"
                style={{
                    top: menuOpen ? "0px" : "-120%",
                    transitionDelay: menuOpen ? "0s" : "0s",
                }}
            >
                <ul className="menu__links">
                    <li>
                        
                    </li>
                    <li>
                        
                    </li>
                    <li>
                        
                    </li>
                    <li>
                        
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default OpenedMenu