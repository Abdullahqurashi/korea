import { Accordion } from '@mui/material';
import React, { useState } from 'react'
import Accordian from './Accordian';
import Firstcard from './Firstcard';
import Footer from './Footer';
 import Fourth from './Fourth'; 
import Header from './Header'
import Navbar from './Navbar'
  import Secondcard from './Secondcard';
 import Thirdcard from './Thirdcard'; 
 import { Link } from 'react-router-dom';
 import { Data } from './SidebarData';

const Main = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <div>
    <Navbar showSidebar={showSidebar} sidebar={sidebar} />
      <div className='grid-parent'>
        <div>

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
        <div className='heder' style={{ marginLeft: sidebar ? '250px !important' : '0' }}>
          <Header />
          <Firstcard />
         <Secondcard/>
      <Thirdcard/>
      <Fourth/>
     <Accordian/>
        </div>
      </div>
   <Footer/>
    </div>
  )
}

export default Main
