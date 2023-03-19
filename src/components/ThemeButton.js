import React, { useState } from 'react';
import { ThemeContext, themes } from '../contexts/ThemeContext';
import "@theme-toggles/react/css/Classic.css"
import { Classic } from "@theme-toggles/react"

const ThemeButton = () => {
    const [darkMode, setDarkMode] = useState(false);

    const lm = <span className="material-symbols-outlined icon__bold">light_mode</span>; 
    const dm =  <span className="material-symbols-outlined icon__bold">dark_mode</span>;    
    
  return (
    <>
        <ThemeContext.Consumer>
            {({ changeTheme }) => (
                <div
                    data-aos="fade-in"
                    className='theme-btn'
                    onClick={() => {
                    setDarkMode(!darkMode); 
                    changeTheme(darkMode ? themes.dark : themes.light);
                }}>
                    <Classic duration={750} />
                </div>
                
            )}
        </ThemeContext.Consumer>
    </>
  )
}

export default ThemeButton