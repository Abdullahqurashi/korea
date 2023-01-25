import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordiandata } from '../Data/Data';

export default function Accordian() {
  const [Accordian, setAccordian] = useState(Accordiandata)
  return (
    <div className='accordian-parent'>


      {/*  SECTION ACCORDIAN START HERE */}


     <div>
     {
      Accordian.map((Accordianmap) => {
        return (
          <div className='accordian'>
            <Accordion className='accordian' style={{borderBottom:'1px solid gray',padding:'5px 0'}}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header" className='accordian'
              >
                <Typography style ={{fontSize:'20px'}}>{Accordianmap.title}</Typography>
              </AccordionSummary>
              <AccordionDetails >
                <Typography className='accordian'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </Accordion>





          </div>
        )
      })
    }
     </div>

      {/*  SECTION ACCORDIAN START HERE */}

      <div>
        <img src="./images/accordian.PNG" alt="" />
      </div>
    </div>
  );
}