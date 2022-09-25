import React from 'react';
import logo from '../../Images/movieateryLogo.png'

const Header = () => {
  return (
    <div className='header' onClick={() => window.scroll(0, 0)}>
        <img src={logo} alt={'Movieatery'} className='header-logo'/>
        <p className='header-title'>MOVIEATERY</p>
        <img src={logo} alt={'Movieatery'} className='header-logo'/>
    </div>
  )
}

export default Header