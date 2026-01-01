import styles from './page.module.css'
import { notFound } from 'next/navigation'

import { getData } from '@/common/apiService'
import { create, read, clear } from '@/common/redisCache'

import GridWrapper from '@/components/layout/GridWrapper/GridWrapper'
import MusicCard from '@/components/cards/MusicCard/MusicCard'
import Pagination from '@/components/ui/Pagination/Pagination'

const ITEMS_PER_PAGE = (2) * 2

export default async function Discography({ searchParams }) {
    const { page = 1 } = await searchParams
    const offset = (page - 1) * ITEMS_PER_PAGE
    let params = {}
    let token = null

    if (Number(page) === 1) {
        params = { limit: ITEMS_PER_PAGE, offset: offset }
    } else {
        token = await read('discography', page)
        if (token.token) {
            params = { limit: ITEMS_PER_PAGE, pageToken: token.token }
        } else {
            params = { limit: ITEMS_PER_PAGE, offset: offset }
        }
    }

    const res = await getData('discography', {
        params: params,
        revalidate: Number(process.env.REVALIDATE_TIME_LONG),
        tags: ['discography']
    })

    if (!token?.hasNext && res?.nextPageToken) {
        await create('discography', String(Number(page)+1), res?.nextPageToken)
    }

    const discographyItems = res?.items || []
    discographyItems?.sort((a, b) => b.createdAt - a.createdAt)

    const totalPages = Math.ceil(res?.pageInfo?.totalResults / ITEMS_PER_PAGE) || 1

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
