import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Data } from './SidebarData';
import './Navbar.css'
import './Media.css'
const Navbar = ({sidebar,showSidebar}) => {
    
  return (
    <div>
   
    <div>
    <div className='navbar'>
    
      <Link to='#' className='menu-bars'>
      
        <FaIcons.FaBars onClick={showSidebar} />
        
      </Link>
     <div className='nav-detail'>
     <div className='nav-detail-text'>流水，《漢語大詞典》拾遺之四 詞典》拾十</div>
    
     </div>
    </div>
    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
 
      <ul className='nav-menu-items' onClick={showSidebar}>
      <img src="./images/logo.PNG" alt="" className='dashboard-logo'/>
        <li className='navbar-toggle'>
          <Link to='#' className='menu-bars'>
         
          </Link>
        </li>
        {Data.map((item, index) => {
          return (
            <li key={index} className={item.cName}>
              <Link to={item.path}>
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
      
    </nav>
  </div>
    </div>
  )
}

export default Navbar

