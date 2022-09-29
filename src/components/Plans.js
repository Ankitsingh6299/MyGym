import React from 'react';
import './Plans.css';
import whiteTick from '../assets/whiteTick.png';
import {plansData} from '../data/plansData';
function Plans() {
  return (
    <div className='plans-container' id='plans-show'>
        <div className='blur plans-blur-1'></div>
        <div className='blur plans-blur-2'></div>
        <div className='programs-header'>
            <span className='stroke-text'>Ready to start</span>
            <span>Your journey</span>
            <span className='stroke-text'>With us</span>
        </div>

        <div className='plans'>
            {plansData.map((plan,i) =>(
                <div className='plan' key={i}>
                    {plan.icon}
                    <span>{plan.name}</span>
                    <span>{plan.price}</span>

                <div className='features'>
                    {plan.features.map((feature,i)=>(
                        <div className='feature' key={i}>
                            <img src={whiteTick} alt='' />
                            <span key={i}>{feature}</span>
                        </div>
                        
                    ))}
                </div>
                <div><span>See more benefits -&gt; </span></div>
        <button className='btn'>Join Now</button>
                </div>
                
            ))}
        </div>
        
    </div>
  )
}

export default Plans