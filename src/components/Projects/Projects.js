import React from 'react'
import p1 from '../../assets/p1.jpg'
import p2 from '../../assets/p2.jpg'
import './projects.css'
const Projects = () => {
  return (
    <section id='projects'>
        <h5>My Recent Work</h5>
        <h2>Projects</h2>
        <div className='container project-container'>
          <article className='project-item'>
            <div className='project-item-image'>
              <img src={p1} alt="Fake News Detection"/>
            </div>
            <h3>Fake News Detection</h3>
            <a href='https://github.com/Jayalakshmi12345/Fake-News-Detection.git' 
            className='btn btn-primary' target='_blank'>Github</a>
          </article>
          <article className='project-item'>
            <div className='project-item-image'>
              <img src={p2} alt="Driver Drowsiness Detection"/>
            </div>
            <h3>Driver Drowsiness Detection</h3>
            <a href='https://github.com/Jayalakshmi12345/driver-drowsiness-detection.git' 
            className='btn btn-primary' 
            target='_blank'>Github</a>
          </article>
        </div>
    </section>
  )
}

export default Projects