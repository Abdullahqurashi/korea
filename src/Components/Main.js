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

const Main = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <div>
      <div className='grid-parent'>
        <div>
          <Navbar showSidebar={showSidebar} sidebar={sidebar} />
        </div>
        <div className='heder' style={{ marginLeft: sidebar ? '250px' : '0' }}>
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
