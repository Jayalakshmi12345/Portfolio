import React from 'react'
import Header from './components/header/Header' 
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Nav from './components/nav/Nav'
import Education from './components/Education/education'
import Projects from './components/Projects/Projects'
function App() {
  return (
    <>
    <Header/>
    <Nav/>
    <About/>
    <Education/>
    <Projects/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App