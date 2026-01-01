import styles from './page.module.css'

import { getData } from '@/common/apiService'

import GridWrapper from '@/components/layout/GridWrapper/GridWrapper'
import MusicCard from '@/components/cards/MusicCard/MusicCard'

export default async function Discography() {
    const res = await getData('discography', { limit: 4 })

    const discographyItems = res?.items || []

    return (
        <>
            <h1>Discography</h1>
            <GridWrapper columns={2} mobileColumns={1}>
                {discographyItems?.map((item, index) => (
                    <MusicCard key={index} item={item} />
                ))}
            </GridWrapper>
        </>
    )
}
