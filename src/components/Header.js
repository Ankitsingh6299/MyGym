import React, { useState } from 'react'
import './Header.css';
import Bars from '../assets/bars.png';
import Logo from '../assets/mygym.jpg';
function Header() {
  const mobile = window.innerWidth<=768?true:false;
  const [menuOpened,setMenuOpened] = useState(false)
    return (
    <div className='header'>
        <img src={Logo} alt="No logo" className='Logo' />
        {(menuOpened===false && mobile===true)?
        (<div style={{backgroundColor:'var(--appColor)',padding:'0.4rem',borderRadius:'5px'}} 
        onClick={()=>setMenuOpened(!menuOpened)}
        ><img src={Bars} alt="" style={{width:'1.5rem',height:'1.0rem'}} /></div>):
        <ul className='header-menu'>
            <li onClick={()=>setMenuOpened(false)}><a href='#Hero-show'>Home</a></li>
            <li onClick={()=>setMenuOpened(false)}><a href='#programs'>Programs</a></li>
            <li onClick={()=>setMenuOpened(false)}><a href='#reasons'>Why us</a></li>
            <li onClick={()=>setMenuOpened(false)}><a href='#plans-show'>Plans</a></li>
            <li onClick={()=>setMenuOpened(false)}><a href='#test'>Testimonials</a></li>
        </ul>
        }
        
    </div>
  )
}

export default Header