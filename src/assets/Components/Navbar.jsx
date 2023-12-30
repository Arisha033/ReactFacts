import React from 'react'
import ReactLogo from '../../images/react-icon-small.png'

export const Navbar = (props) => {
    
  return (
    <>
    <nav className={props.darkMode ? "dark" : ""}>
        <img src={ReactLogo} alt="react-icon"className='nav-logo-icon'/>
        <h3 className='nav-logo-text'>ReactFacts</h3>
        <div className='toggler'>
            <p className='toggler-light'>Light</p>
            <div className='toggler-slider' onClick={props.toggleDarkMode}>
                <div className='toggler-slider-circle'></div>
            </div>
            <p className='toggler-dark'>Dark</p>
        </div>
    </nav>
    </>
  )
}
