import styles from './Button.module.css'
import Link from 'next/link'

export default function Button({path, url, onClick, children}) {
    return (
        <>
            {path ?
                <Link href={path} className={styles.container}>
                    {children}
                </Link>
            : url ?
                <a href={url} className={styles.container} target="_blank" rel="noopener noreferrer">
                    {children}
                </a>
            : onClick ?
                <button className={styles.container} onClick={onClick}>
                    {children}
                </button>
            : <div className={styles.container}> {children} </div>
            }
        </>
    )
}
