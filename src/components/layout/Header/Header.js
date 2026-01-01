import styles from './Header.module.css'
import Link from 'next/link'

import { FaInstagram, FaTwitter, FaFacebook, FaYoutube, FaTiktok } from 'react-icons/fa'

const pages = [
    {
        title: 'Profile',
        url: '/profile',
    },
    {
        title: 'Discography',
        url: '/discography',
    },
    {
        title: 'Gallery',
        url: '/gallery',
    },
    {
        title: 'Video',
        url: '/video',
    },
    {
        title: 'News',
        url: '/news',
    },
    {
        title: 'Schedule',
        url: '/schedule',
    },
]

const sns = [
    {
        icon: <FaInstagram />,
        url: 'https://www.instagram.com/zo__glasss/',
    },
    {
        icon: <FaTiktok />,
        url: 'https://www.tiktok.com/@joyuri.offcl',
    },
    {
        icon: <FaTwitter />,
        url: 'https://mobile.twitter.com/joyuri_offcl/',
    },
    {
        icon: <FaYoutube />,
        url: 'https://www.youtube.com/c/JOYURI_offcl/',
    },
    {
        icon: <FaFacebook />,
        url: 'https://web.facebook.com/JOYURI.offcl/',
    },
]

export default function Header() {
    return (
        <>
            <header className={styles.header}>
                <section className={styles.container}>
                    <div className={styles.logo}>
                        <Link href='/'>
                            <span>Jo Yuri</span>
                        </Link>
                    </div>
                    <nav className={styles.nav}>
                        {pages?.map((i, index) => {
                            return (
                                <Link href={i.url} className={styles.navItem} key={index}>
                                    {i.title}
                                </Link>
                            )
                        })}
                    </nav>
                    <div className={styles.nav}>
                        {sns?.map((i, index) => {
                            return (
                                <a href={i.url} target='_blank' rel='noopener noreferrer' className={styles.navItem} key={index}>
                                    {i.icon}
                                </a>
                            )
                        })}
                    </div>
                </section>
            </header>
        </>
    )
}
