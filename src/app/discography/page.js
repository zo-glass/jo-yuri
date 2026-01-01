import styles from './page.module.css'
import { notFound } from 'next/navigation'

import { getData } from '@/common/apiService'

import GridWrapper from '@/components/layout/GridWrapper/GridWrapper'
import MusicCard from '@/components/cards/MusicCard/MusicCard'
import Pagination from '@/components/ui/Pagination/Pagination'

const ITENS_PER_PAGE = (2) * 2

export default async function Discography({ searchParams }) {
    const { page = 1 } = await searchParams
    const offset = (page - 1) * ITENS_PER_PAGE

    const res = await getData('discography', { limit: ITENS_PER_PAGE, offset: offset })

    const discographyItems = res?.items || []
    discographyItems?.items?.sort((a, b) => b.createdAt - a.createdAt)

    const totalPages = Math.ceil(res?.pageInfo?.totalResults / ITENS_PER_PAGE) || 1

    if (discographyItems.length === 0) {
        notFound()
    }

    return (
        <>
            <h1>Discography</h1>
            <GridWrapper columns={2} mobileColumns={1}>
                {discographyItems?.map((item, index) => (
                    <MusicCard key={index} item={item} />
                ))}
            </GridWrapper>
            <div className={styles.pagination}>
                <Pagination totalPages={totalPages} />
            </div>
        </>
    )
}
