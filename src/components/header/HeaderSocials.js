import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {SiGmail} from 'react-icons/si'
const HeaderSocials = () => {
  return (
    <div  className='header-socials'>
        <a href='https://www.linkedin.com/in/polanki-jaya-lakshmi-476a83215' target='_blank'><BsLinkedin/></a>
        <a href='https://github.com/Jayalakshmi12345' target='_blank'><BsGithub/></a>
        <a href='mailto:jayalakshmipolanki@gmail.com' target='_blank'><SiGmail/></a>
    </div>
  )
}

export default HeaderSocials