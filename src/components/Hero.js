import React from 'react'
import Header from './Header';
import './Hero.css';
import {motion} from 'framer-motion';
import hero_image from "../assets/hero_image.png";
import hero_image_back from "../assets/hero_image_back.png";
import Heart from "../assets/heart.png";
import Calories from "../assets/calories.png";
function Hero() {
  const transition={type:'spring',duration:3}
  const mobile = window.innerWidth<=768?true:false;
  return (
    <div className='hero' id='Hero-show'>
      <div className='blur hero-blur'></div>
        <div className='left-h'>
            <Header />
        <div className='the-best-ad'>
            <motion.div
            initial={{left:mobile ? '188px' : '290px' }}
            whileInView={{left:'9px'}}
            transition={{...transition,type:'tween'}}
            >

            </motion.div>
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
        <div className='right-h'>
          <button className='btn'>Join Now</button>
          <motion.div 
          transition={transition}
          initial={{right:"-1rem"}}
          whileInView={{right:"4rem"}}
          className='heart-rate'>
            <img src={Heart} alt='' />
            <span>Heart Rate</span>
            <span>116BPM</span>
          </motion.div>

          <img src={hero_image} alt='err' className='hero-image'/>
          <motion.img initial={{right:"11rem"}} 
          whileInView={{right:"20rem"}} transition={transition} src={hero_image_back} alt='err' className='hero-image-back'/>

          <motion.div 
          initial={{right:"37rem"}}
          whileInView={{right:"28rem"}}
          transition={transition}
          className='calories'>
            <img src={Calories} alt='' />
            <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
            </div>
            
          </motion.div>
        </div>
    </div>
  )
}

export default Hero