import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me3.png' 
import HeaderSocials from './HeaderSocials'
import Typical from 'react-typical'
function Header() {
  return (
    <header id='header'>
      <div className="container header-container">
        <h5>Hello I'm</h5>
        <h1>Jaya  Lakshmi Polanki</h1>
        <div className="text-light">
          <Typical
          loop={Infinity}
          steps={[
            'Fullstack Developer',1000,
            "React Developer",1000,
          ]}
          />
        </div>
        <CTA/>
        <HeaderSocials/>
        <a href='#contact' className='scroll-down'>Scroll Down</a>
        <div className="me">
          <img src={ME} alt='me' ></img>
        </div>
      </div>
    </header>
  )
}

export default Header