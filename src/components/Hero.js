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
        </div>
        <div className='right-h'>Right Side</div>
    </div>
  )
}

export default Hero