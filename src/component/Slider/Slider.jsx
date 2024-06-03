import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styles from "./slider.module.css"



function Slider() {

    const watches = [
        {
            id: 1,
            img: "/configur/0.jpg",
            title: "Datejust"
        },
        {
            id: 2,
            img: "/configur/1.jpg",
            title: "Submariner"

        },
        {
            id: 3,
            img: "/configur/2.jpg",
            title: "GMT-MASTER II"

        },
        {
            id: 3,
            img: "/configur/3.jpg",
            title: "Day-Date"

        },
        {
            id: 3,
            img: "/configur/4.jpg",
            title: 'Cosmograph Daytona'


        },
        {
            id: 3,
            img: "/configur/5.jpg",
            title: "Oyester Perpetual"


        },
        {
            id: 3,
            img: "/configur/6.jpg",
            title: "Yatch-Master",


        },
        {
            id: 3,
            img: "/configur/7.jpg",

            title: "Sea-Dweller",
        },
        {
            id: 3,
            img: "/configur/8.jpg",
            title: "Deepsea",



        },
        {
            id: 3,
            img: "/configur/9.jpg",
            title: "Air-King",


        },
        {
            id: 3,
            img: "/configur/10.jpg",
            title: "Explorer",


        },
        {
            id: 3,
            img: "/configur/11.jpg",
            title: "Lady-Datejust",


        },
        {
            id: 3,
            img: "/configur/12.jpg",
            title: "Sky-Dweller",


        },
    ]
    return (
        <>
            <div className={styles.Container}>
                <div className={styles.Watches}>
                    <h1 style={{ textAlign: "center" }}>SELECT A WATCH TO</h1>
                </div>
                <div className={styles.Models} style={{ textAlign: "center" }}>
                    <h1>Configure</h1>
                </div>
            </div>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 70,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                modules={[EffectCoverflow, Pagination]}
                // pagination={true}
                className={styles.Swiper}
            >
                {
                    watches.map((value, index) => {
                        return (
                            <SwiperSlide className={styles.swiperSlide} key={index}>
                                <img src={value.img} alt='images' />
                                <h4>{value.title}</h4>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </>

    )
}

export default Slider