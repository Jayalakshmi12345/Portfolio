import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import {useRef} from 'react'
import emailjs from 'emailjs-com'
function Contact() {
  const form=useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_lz9qjf1', 'template_kcpc6n8', form.current, 'unQ2pkVWp1Il3gLVr')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact-container'>
        <div className='contact-options'>
          <article className='contact-option'>
            <MdOutlineEmail className='contact-option-icon'/>
            <h4>Email</h4>
            <h5>jayalakshmipolanki@gmail.com</h5>
            <a href="mailto:jayalakshmipolanki@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className='contact-option'>
            <BsLinkedin className='contact-option-icon'/>
            <h4>LinkedIn</h4>
            <h5>Polanki Jaya Lakshmi</h5>
            <a href="https://www.linkedin.com/in/polanki-jaya-lakshmi-476a83215" target="_blank">View Profile</a>
          </article>
          <article className='contact-option'>
            <BsWhatsapp className='contact-option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+91 7658913034</h5>
            <a href="https://web.whatsapp.com/send?phone=+91 7658913034" target="_blank">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required/>
          <input type="email" name="email" placeholder='Your Email' required/>
          <textarea name="message" rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact