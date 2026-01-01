import styles from './Footer.module.css'
import Link from 'next/link'

import { FaInstagram, FaTwitter, FaFacebook, FaYoutube, FaTiktok } from 'react-icons/fa'

const pages = [
    {
        title: 'About',
        url: '/about',
    },
    {
        title: 'Privacy Policy',
        url: '/privacy',
    },
    {
        title: 'Terms & Conditions',
        url: '/terms',
    },
]

const links = [
    {
        type: <FaYoutube />,
        url: 'https://www.youtube.com/c/JOYURI_offcl/',
    },
    {
        type: <FaTiktok />,
        url: 'https://www.tiktok.com/@joyuri.offcl',
    },
    {
        type: <FaTwitter />,
        url: 'https://mobile.twitter.com/joyuri_offcl/',
    },
    {
        type: <FaInstagram />,
        url: 'https://www.instagram.com/zo__glasss/',
    },
    {
        type: <FaFacebook />,
        url: 'https://web.facebook.com/JOYURI.offcl/',
    },
]

export default function Footer() {
    return (
        <>
            <footer className={styles.footer}>
                <nav className={styles.container}>
                    <ul className={`${styles.menu} ${styles.mobileColumn}`}>
                        <li className={`${styles.menuItem} ${styles.mobilePaddingV}`}>
                            <a href="https://wake-one.com/" target='_blank' rel='noopener noreferrer'>
                                <p>Wake One Entertainment</p>
                            </a>
                        </li>
                        {pages?.map((i, index) => {
                            return (
                                <li className={`${styles.menuItem} ${styles.mobilePaddingV}`} key={index}>
                                    <Link href={i.url}>
                                        {i.title}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                    <ul className={styles.menu}>
                        {links?.map((i, index) => {
                            return (
                                <li className={`${styles.menuItem} ${styles.mobilePaddingH}`} key={index}>
                                    <a href={i.url} target='_blank' rel='noopener noreferrer'>
                                        {i.type}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </footer>
        </>
    )
}
