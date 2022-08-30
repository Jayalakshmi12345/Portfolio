import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBookBookmark} from 'react-icons/bi'
import {BiMessageDetail} from 'react-icons/bi'
import {FaGraduationCap} from 'react-icons/fa'
import {AiOutlineFile} from 'react-icons/ai'
import {useState} from 'react'
function Nav() {
  const [activeNav,setActiveNav]=useState('#');

  return (
    <nav>
      <a href='#header' 
      className={`tooltip ${activeNav==='#' ? 'active':''}`} 
      onClick={()=>setActiveNav('#')}
      data-title='Home' ><AiOutlineHome/></a>
      <a href='#about' 
      className={`tooltip ${activeNav==='#about' ? 'active':''}`} 
      onClick={()=>setActiveNav('#about')} 
      data-title='About'>
        <AiOutlineUser/></a>
      <a href='#education' 
      className={`tooltip ${activeNav==='#education' ? 'active':''}`} 
      onClick={()=>setActiveNav('#education')} 
      data-title='Education'>
        <FaGraduationCap/></a>
      <a href='#projects' 
      className={`tooltip ${activeNav==='#projects' ? 'active':''}`} 
      onClick={()=>setActiveNav('#projects')} 
      data-title='Projects'>
        <AiOutlineFile/></a>
      <a href='#contact' className={`tooltip ${activeNav==='#contact' ? 'active':''}`} 
      onClick={()=>setActiveNav('#contact')} data-title='Contact'><BiMessageDetail/></a>
    </nav>
  )
}

export default Nav