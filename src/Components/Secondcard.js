import React, { useState } from 'react'
import { Seconddetail } from '../Data/Data';

const Secondcard = () => {
    const [Secondcard, setSecondcard] = useState(Seconddetail);
    return (
        <div>
            {/* this section start here here of card section section second  */}
            <div>

                <div style={{ width: "90%", margin: "auto", padding: '20px 0 0 0' }}>
                    <h3 style={{ color: "white" }}>流水，《漢語大詞典》拾遺之四 詞典》拾十</h3>
                    <h5 style={{ color: '#8a9297',width:'80%' }}>流水，《漢語大詞典》拾遺之四 詞典》拾十流水，《漢語大詞典》拾遺之四 詞典》拾十</h5>
                </div>
                <div className='cardsecond-parent'>
                    {
                        Secondcard.map((secondmap) => {
                            return (
                                <div className='cardsecond-sub-parent'>
                                    <div className=''>
                                        <img src={secondmap.img} alt="" />
                                    </div>
                                    <div>
                                        <h3 style={{ color: 'white',width:'90%' }}>{secondmap.title}</h3></div>
                                    <div><h5 style={{ width: '80%', color: '#8a9297' }}>{secondmap.description}</h5></div>

                                </div>

                            )
                        })
                    }

                </div>


            </div>
            <center><button className='cardsecond-button'>遺之四 詞</button></center>


            {/* this section end  here here of card section section second  */}

            <div className='banner-second'>
                <div>
                    <img src="./images/banner3.PNG" alt="" />


                </div>
                <div>
                    <img src="./images/banner4.PNG" alt="" />
                </div>
                <div>
                    <img src="./images/banner5.PNG" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Secondcard
