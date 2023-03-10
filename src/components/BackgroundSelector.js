import React from 'react'
import { useState } from 'react'
import BackgroundParticles from './Particles'

const BackgroundSelector = () => {
    const [isShown, setIsShown] = useState(false);

    const handleClick = () => {
        setIsShown(current => !current);
    } 

  return (
    <div>
        <label className="background-switch">
            <input type="checkbox" onClick={handleClick} />
            <span className="background-slider"></span>
        </label>
        {isShown && <BackgroundParticles />}
    </div>
  )
}

export default BackgroundSelector;