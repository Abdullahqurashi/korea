import React, { useState } from 'react'

import Firstcard from './Firstcard';
// import Footer from './Footer';
/* import Fourth from './Fourth'; */
import Header from './Header'
import Navbar from './Navbar'
/*  import Secondcard from './Secondcard';
import Thirdcard from './Thirdcard'; */

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
         
     
        </div>
      </div>
   
    </div>
  )
}

export default Main
