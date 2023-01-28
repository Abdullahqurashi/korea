import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Fragment } from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { footersliderdata } from "../Data/Data";


// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";


{/*------------------------- START HERE THIS SECTION OF THE FOOTER SLIDER ------------------------- */ }

export default function Footerslide() {
    return (

        <Fragment>
            {
                footersliderdata.map((footerslidermap) => {
                    return (
                        <div>
                            <Swiper
                                cssMode={true}
                                navigation={true}
                                pagination={true}
                                mousewheel={true}
                                keyboard={true}
                                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                                className="mySwiper"
                            >
                                <SwiperSlide><img src={footerslidermap.img} alt="" /></SwiperSlide>
                            </Swiper>
                        </div>
                    )
                })
            }
        </Fragment>
    );
}


{/*<======================>  END HERE THIS SECTION OF THE FOOTER SLIDER   <======================> */ }