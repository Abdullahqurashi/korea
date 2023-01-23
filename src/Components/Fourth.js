import React , {useState} from 'react';
import { Fourthdetail } from '../Data/Data';


const Fourth = () => {
    const [Fourth, setFourth] = useState(Fourthdetail); 
  return (
    <div className='fourth-parent'>
      {
        Fourth.map((Fourthmap)=>{
            return(
                <div className='fourth-detail'>
                    <h3>{Fourthmap.title}</h3>
                    <h5>{Fourthmap.describe}</h5>
                    <h6>{Fourthmap.time}</h6>
                </div>
            )
        })
      }
    </div>
  );
}

export default Fourth;
