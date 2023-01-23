import React , {useState} from 'react';
import Fourthdetail from './Fourthdetail';

const Fourth = () => {
    const [Fourth, setFourth] = useState(Fourthdetail); 
  return (
    <div>
      {
        Fourth.map((Fourthmap)=>{
            return(
                <div>
                    <h3>请翻译以下这段文字：今天，我手写我心</h3>
                    <h5>请翻译以下这段文字：今天，我手写我心，记录生活点滴，是为了明天，再看回这些文字的时候能感动自己请翻译以下这段文字：今天，我手写我心，记录生活点滴，是为了明天，再看回这些文字的时候能感动自己</h5>
                    <h6>今天:Kim471 | 2020.9.29</h6>
                </div>
            )
        })
      }
    </div>
  );
}

export default Fourth;
