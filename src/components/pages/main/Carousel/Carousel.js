"use client"

import styles from "./Carousel.module.css"

import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css'


export default function Carousel({ items }) {
    return (
        <>
            <Swiper className={styles.swiper}>
                {items?.map((i, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <a href={i.href} target="_blank" rel="noopener noreferrer">
                                <img src={i.src} alt={i.alt} className={styles.image} />
                            </a>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </>
    )
}
