import React, { useRef } from 'react'
import './Join.css';
import emailjs from '@emailjs/browser';
function Join() {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pwrvbnj', 'template_ldvhn0d', form.current, 'y9TkIDOmN0ATqgUUQ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className='Join' id='join-us'>
      <div className='left-j'>
       
        <hr />
        <div className='spare'></div>
          <div>
            <span className='stroke-text'>READY TO</span>
            <span> LEVEL UP</span>
          </div>
          <div>
            <span>YOUR BODY</span>
            <span className='stroke-text'> WITH US</span>
          </div>
      </div>
      <div className='right-j'>
        <div><span></span></div>
        <form ref={form} className='email-container' onSubmit={sendEmail}>
          <input type='email' name='user-email' placeholder='Enter your Email Address' />
          <button className='btn btn-j'>Join Us</button>
        </form>
        </div>  
    </div>
  )
}

export default Join