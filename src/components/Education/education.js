import React from 'react'
import { BiCheck } from 'react-icons/bi'
import './education.css'

const Education = () => {
  return (
    <section id='education'>
      <h5>what I have studied</h5>
      <h2>My Education</h2>
      <div className='container education-container'>
        <article className='education'>
          <div className='education-head'>
            <h3>Graduation</h3>
          </div>
          <ul className='education-list'>
            <li>
              <BiCheck className='education-list-icon'/>
              <p>JNTUA College of Engineering</p>
            </li>
            <li>
              <BiCheck className='education-list-icon'/>
              <p>Pulivendula</p>
            </li>
            <li>
              <BiCheck className='education-list-icon'/>
              <p>Bachlor's Degree in Computer Science and Engineering</p>
            </li>
            <li>
              <BiCheck className='education-list-icon'/>
              <p>Major in Computers</p>
            </li>
            <li>
              <BiCheck className='education-list-icon'/>
              <p>2020-2023</p>
            </li> 
            
          </ul>
        </article>
        <article className='education'>
          <div className='education-head'>
            <h3>Diploma</h3>
          </div>
          <ul className='education-list'>
            <li>
              <BiCheck className='education-list-icon'/>
              <p>Government Polytechnic</p>
            </li>
            <li>
              <BiCheck className='education-list-icon'/>
              <p>Proddatur</p>
            </li>
            <li>
              <BiCheck className='education-list-icon'/>
              <p>PreUniversity</p>
            </li>
            <li>
              <BiCheck className='education-list-icon'/>
              <p>Major in Computers</p>
            </li>
            <li>
              <BiCheck className='education-list-icon'/>
              <p>2017-2020</p>
            </li>
          </ul>
        </article>
        <article className='education'>
          <div className='education-head'>
            <h3>SSC</h3>
          </div>
          <ul className='education-list'>
            <li>
              <BiCheck className='education-list-icon'/>
              <p>SVV Government Boys High School</p>
            </li>
            <li>
              <BiCheck className='education-list-icon'/>
              <p>Proddatur</p>
            </li>
            <li>
              <BiCheck className='education-list-icon'/>
              <p>Schooling</p>
            </li>
            <li>
              <BiCheck className='education-list-icon'/>
              <p>2016-2017</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Education