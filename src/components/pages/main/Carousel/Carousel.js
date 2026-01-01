'use client'

import styles from './Carousel.module.css'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

export default function Carousel({ items }) {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={0}
                loop={true} 
                modules={[ Autoplay ]}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                className={styles.swiper}
            >
                {items?.map((i, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <a href={i.href} target='_blank' rel='noopener noreferrer'>
                                <img src={i.src} alt={i.alt} className={styles.image} />
                            </a>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </>
    )
}
