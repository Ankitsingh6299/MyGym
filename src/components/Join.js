import React from 'react'
import './Join.css';
function Join() {
  return (
    <div className='Join' id='join-us'>
      <div className='left-j'>
        <hr />
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
        <form action='' className='email-container'>
          <input type='email' name='user-email' placeholder='Enter your Email Address' />
          <button className='btn btn-j'>Join Us</button>
        </form>
        </div>  
    </div>
  )
}

export default Join