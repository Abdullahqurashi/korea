import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Data } from './SidebarData';
import './Navbar.css'
import './Media-Percentage.css'
const Navbar = ({ sidebar, showSidebar }) => {

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

      </div>
    </div>
  )
}

export default Navbar

