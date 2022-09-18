import React from 'react'
import Header from './Header';
import './Hero.css';
function Hero() {
  return (
    <div className='hero'>
        <div className='left-h'>
            <Header />
        <div className='the-best-ad'>
            <div></div>
            <span>the best fitness club in the town</span>
        </div>
        <div className='hero-text'>
          <div>
            <span className='stroke-text'>Shape </span>
            <span>Your</span>
          </div>
  
          <div>
            <span>Ideal Body</span>
          </div>

          <div>
            <span>We will help you transform yourself into a better form,a more attractive version of you and will make you feel confident again!</span>
          </div>
        </div>
        <div className='figures'>
          <div>
            <span>+140</span>
            <span>Expert Coaches</span>
          </div>
          <div>
          <span>+978</span>
            <span>Members Joined</span>
          </div>
          <div>
          <span>+50</span>
            <span>Fitness programs</span>
          </div>
        </div>

        <div className='hero-buttons'>
          <button className='btn'>Get Started</button>
          <button className='btn'>Learn More</button>
        </div>
        </div>
        <div className='right-h'>Right Side</div>
    </div>
  )
}

export default Hero