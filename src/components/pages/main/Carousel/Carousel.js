'use client'

import styles from './Carousel.module.css'
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

export default function Carousel({ items }) {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={0}
                loop={true} 
                modules={[ Autoplay, Navigation ]}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}  
                navigation={{
                    prevEl: `.${styles.prev}`,
                    nextEl: `.${styles.next}`,
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
                <IoIosArrowDropleftCircle className={`${styles.navButton} ${styles.prev}`} />
                <IoIosArrowDroprightCircle className={`${styles.navButton} ${styles.next}`} />
            </Swiper>
        </>
    )
}
