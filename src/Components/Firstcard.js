import React, { useState } from 'react'
import { Firstdetail } from '../Data/Data';
const Firstcard = ({ sidebar, showSidebar }) => {
    const [Firstcard, setFirstcard] = useState(Firstdetail);
    return (
        <div>

            {/* this section start here here of card first  */}

            
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

            {/* this section start end here of card first  */}


            {/* this section start here here of banner section first  */}


            <div className='banner-first'>
                <div>
                    <img src="./images/banner1.PNG" alt="" /></div>
                <div>
                    <img src="./images/banner1.PNG" alt="" /></div>
            </div>


            {/* this section end here here of banner section first  */}
        </div>
    )
}

export default Firstcard
