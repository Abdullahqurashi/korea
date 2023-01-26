import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Fragment } from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { footersliderdata } from "../Data/Data";
import Navbar from "./Navbar";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

export default function footerslide() {
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
                                <SwiperSlide>{footerslidermap.img}</SwiperSlide>
                            </Swiper>
                        </div>
                    )
                })
            }
        </Fragment>
    );
}
