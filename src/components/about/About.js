import React from 'react'
import './about.css'
import ME from '../../assets/me2.jpeg' 
import {BiCheck} from 'react-icons/bi'
function About() {
  return (
    <section id='about'>
        <h5>Get To Know</h5>
        <h2>About Me</h2>
        <div className='container about-container'>
          <div className='about-me'>
            <div className='about-me-img'>
              <img src={ME} alt='About-Me image'/>
            </div>
          </div>
          <div className='about-content'>
            <div className='about-cards'>
              <article className='about-card'>
                <h5>I'm very ambitious front-end developer looking a for a role in established IT company with the opportunity to work with the latest technologies on challenging and diverse projects</h5>
                <div className='about-head'>
                  <h3>Here are a Few Highlights</h3>
                </div>
                <ul className='about-list'>
                  <li>
                  <BiCheck className='about-list-icon'/>
                    HTML</li>
                  <li>
                  <BiCheck className='about-list-icon'/>
                    CSS</li>
                  <li>
                  <BiCheck className='about-list-icon'/>
                    JavaScript</li>
                  <li>
                  <BiCheck className='about-list-icon'/>
                    React JS</li> 
                  <li>
                  <BiCheck className='about-list-icon'/>
                    Python</li>
              </ul>
              </article>
            </div>
          </div>
        </div>
    </section>
  )
}

export default About