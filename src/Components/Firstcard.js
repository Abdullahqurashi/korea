import React, { useState } from 'react'
import { Firstdetail } from '../Data/Data';
const Firstcard = ({sidebar,showSidebar}) => {
    const [Firstcard, setFirstcard] = useState(Firstdetail);
    return (
        <div>

            <div style={{ width: "90%", margin: "auto", padding: '20px 0 0 0' }}>
                <h3 style={{ color: "white" }}>流水，《漢語大詞典》拾遺之四 詞典》拾十</h3>
                <h5 style={{ color: '#8a9297' }}>流水，《漢語大詞典》拾遺之四 詞典》拾十流水，《漢語大詞典》拾遺之四 詞典》拾十</h5>
            </div>
            <div className='cardfirst-parent'>
                {
                    Firstcard.map((firstmap) => {
                        return (
                            <div className='cardfirst-sub-parent'>
                                <div className=''>
                                    <img src={firstmap.img} alt="" />
                                </div>
                                <div>
                                    <h3  className= "cardfirst-title">{firstmap.title}</h3></div>
                                <div><h5 className="cardfirst-descripton">{firstmap.description}</h5></div>
                                <button className='cardfirst-button'>{firstmap.button}</button>
                            </div>

                        )
                    })
                }

            </div>
            <div className='banner-first'>
                <div>
                    <img src="./images/banner1.PNG" alt="" /></div>
                <div>
                    <img src="./images/banner1.PNG" alt="" /></div>
            </div>

        </div>
    )
}

export default Firstcard
