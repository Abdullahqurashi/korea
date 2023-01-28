import React, { useState } from 'react'
import { Thirddetail } from '../Data/Data';

const Thirdcard = () => {
    const [Thirdcard, setThirddcard] = useState(Thirddetail);
    return (
        <div>

            {/*------------------------- START HERE THIS SECTION OF THIRD CARD SECTION------------------------- */}
            <div>


                {/*------------------------- START HERE THIS SECTION OF THE THIRD CARD SECTION TITLE ------------------------- */}
                <div style={{ width: "90%", margin: "auto", padding: '20px 0 0 0' }}>
                    <h3 style={{ color: "white" }}>流水，《漢語大詞典》拾遺之四 詞典》拾十</h3>
                    <h5 style={{ color: '#8a9297', width: '80%' }}>流水，《漢語大詞典》拾遺之四 詞典》拾十流水，《漢語大詞典》拾遺之四 詞典》拾十</h5>
                </div>
                {/*<======================>  END HERE THIS SECTION OF THE THIRD CARD  SECTION TITLE  <======================> */}



                {/*------------------------- START HERE THIRD SECTION CARDS------------------------- */}
                <div className='cardthird-parent'>
                    {
                        Thirdcard.map((thirddmap) => {
                            return (
                                <div className='cardthird-sub-parent'>
                                    <div className=''>
                                        <img src={thirddmap.img} alt="" />
                                    </div>
                                    <div>
                                        <h3 style={{ color: 'white', width: '90%' }}>{thirddmap.title}</h3></div>
                                    <div><h5 style={{ width: '80%', color: '#8a9297' }}>{thirddmap.description}</h5></div>

                                </div>

                            )
                        })
                    }

                </div>
                {/*<======================>  END HERE THIRD SECTION CARDS   <======================> */}

            </div>

            {/*<======================>  END HERE THIS SECTION OF THE THIRD CARD  SECTION   <======================> */}
        </div>
    )
}

export default Thirdcard
