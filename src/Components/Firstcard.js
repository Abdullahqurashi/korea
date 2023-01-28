import React, { useState } from 'react'
import { Firstdetail } from '../Data/Data';
const Firstcard = ({ sidebar, showSidebar }) => {
    const [Firstcard, setFirstcard] = useState(Firstdetail);
    return (
        <div>

            {/*------------------------- START HERE THIS SECTION OF THE FIRST CARD SECTION TITLE AND DESCRIPTION ------------------------- */}
            <div style={{ width: "90%", margin: "auto", padding: '20px 0 0 0' }}>
                <h3 style={{ color: "white", }}>流水，《漢語大詞典》拾遺之四 詞典》拾十</h3>
                <h5 style={{ color: '#8a9297', width: '80%' }}>流水，《漢語大詞典》拾遺之四 詞典》拾十流水，《漢語大詞典》拾遺之四 詞典》拾十</h5>
            </div>
            {/*<======================>  END HERE THIS SECTION OF THE FIRST CARD SECTION TITLE AND DESCRIPTION   <======================> */}




            {/*------------------------- START HERE THIS SECTION OF THE FIRST CARD SECTION  ------------------------- */}
            <div className='cardfirst-parent'>
                {
                    Firstcard.map((firstmap) => {
                        return (
                            <div className='cardfirst-sub-parent'>
                                <div className=''>
                                    <img src={firstmap.img} alt="" />
                                </div>
                                <div>
                                    <h3 className="cardfirst-title">{firstmap.title}</h3></div>
                                <div><h5 className="cardfirst-descripton">{firstmap.description}</h5></div>
                                <button className='cardfirst-button'>{firstmap.button}</button>
                            </div>

                        )
                    })
                }

            </div>
            {/*<======================>  END HERE THIS SECTION OF THE FIRST CARD SECTION   <======================> */}




            {/*------------------------- START HERE THIS SECTION OF THE FIRST CARD BANNER SECTION ------------------------- */}
            <div className='banner-first'>
                <div>
                    <img src="./images/banner1.PNG" alt="" /></div>
                <div>
                    <img src="./images/banner1.PNG" alt="" /></div>
            </div>
            {/*<======================>  END HERE THIS SECTION OF THE FIRST CARD BANNER SECTION   <======================> */}


        </div>
    )
}

export default Firstcard
