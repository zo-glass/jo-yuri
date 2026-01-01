import styles from "./page.module.css"

import { getData } from '@/common/apiService'

import Carousel from '@/components/pages/main/Carousel/Carousel'
import MainDiscography from '@/components/pages/main/MainDiscography/MainDiscography'

export default async function Home() {
	const [carouselItems, discographyItems] = await Promise.all([
		getData('carousel', {
			revalidate: Number(process.env.REVALIDATE_TIME_LONG),
			tags: ['carousel']
		}),
		getData('discography', { 
			params: { limit: 4 },
			revalidate: Number(process.env.REVALIDATE_TIME_LONG),
			tags: ['discography']
		})
	])

	carouselItems?.items?.sort((a, b) => b.createdAt - a.createdAt)
	discographyItems?.items?.sort((a, b) => b.createdAt - a.createdAt)

	return (
		<>
			<Carousel items={carouselItems?.items || []} />
			<MainDiscography items={discographyItems?.items || []} />
		</>
	)
}
