import React, { useState } from 'react'
import { Thirddetail } from '../Data/Data';

const Thirdcard = () => {
    const [Thirdcard, setThirddcard] = useState(Thirddetail);
    return (
        <div>
            <div>

                <div style={{ width: "90%", margin: "auto", padding: '20px 0 0 0' }}>
                    <h3 style={{ color: "white" }}>流水，《漢語大詞典》拾遺之四 詞典》拾十</h3>
                    <h5 style={{ color: '#8a9297',width:'80%' }}>流水，《漢語大詞典》拾遺之四 詞典》拾十流水，《漢語大詞典》拾遺之四 詞典》拾十</h5>
                </div>
                <div className='cardthird-parent'>
                    {
                        Thirdcard.map((thirddmap) => {
                            return (
                                <div className='cardthird-sub-parent'>
                                    <div className=''>
                                        <img src={thirddmap.img} alt="" />
                                    </div>
                                    <div>
                                        <h3 style={{ color: 'white',width:'90%' }}>{thirddmap.title}</h3></div>
                                    <div><h5 style={{ width: '80%', color: '#8a9297' }}>{thirddmap.description}</h5></div>

                                </div>

                            )
                        })
                    }

                </div>


            </div>
           
{/*<div className='button-third'>

<div>
<button className='active-third-button'>《漢語大</button>
</div>
<div>
<button>《漢語大</button>
</div>
<div>
<button>《漢語大</button>
</div>
<div>
<button>《漢語大</button>
</div>

                </div>*/}
           
        </div>
    )
}

export default Thirdcard
