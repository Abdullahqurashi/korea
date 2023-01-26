import React, {useState} from 'react';
import { Footerdetail } from '../Data/Data';
import { footerbuttons } from '../Data/Data';
import footerslide from './Footerslider';
const Footer = ({sidebar,showSidebar}) => {
    const [Footer, setFooter] = useState(Footerdetail)
  return (
   <div className='footer' >
   <div className='footer-parent' style={{marginLeft: sidebar ? '250px' : '0'}}>
   {
     Footer.map((footermap)=>{
         return(
             <div className='footer-sub-parent'>
                 <h3>{footermap.title}</h3>
                 <h5>{footermap.description}</h5>
                 <h3>{footermap.tiltetwo}</h3>
                
                 
             </div>
         )
     })
   }

 { /*  <div>
   <div className='footer-button'>
  
   {
    footerbuttons.map((footerbuttons) =>{
      return(
        <div>
        <button>{footerbuttons.btn}</button>
        </div>
      )
    })
   }
  
   </div>

   </div> */}
  
 </div>

 <footerslide/>
   </div>
  );
}

export default Footer;
