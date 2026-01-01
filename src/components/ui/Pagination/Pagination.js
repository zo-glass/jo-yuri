'use client'

import styles from './Pagination.module.css'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

import { VscChevronLeft, VscChevronRight } from 'react-icons/vsc'

export default function Pagination({ totalPages }) {
    const searchParams = useSearchParams()
    const currentPage = Number(searchParams.get('page')) || 1

    const prevPage = currentPage === 1 ? 1 : currentPage - 1
    const nextPage = currentPage === totalPages? totalPages : currentPage + 1

    return (
        <>
            <div className={styles.container}>
                <Link href={`?page=${prevPage}`}>
                    <VscChevronLeft />
                </Link>
                <div className={styles.pages}>
                    <span>{currentPage}</span>
                    <span>of {totalPages}</span>
                </div>
                <Link href={`?page=${nextPage}`}>
                    <VscChevronRight />
                </Link>
            </div>
        </>
    )
}
