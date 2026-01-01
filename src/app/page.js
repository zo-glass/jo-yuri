import styles from "./page.module.css"

import { getData } from '@/common/apiService'

import Carousel from '@/components/pages/main/Carousel/Carousel'

export default async function Home() {
	const [carouselItems] = await Promise.all([
		getData('carousel')
	])

	carouselItems?.items?.sort((a, b) => b.createdAt - a.createdAt)

	return (
		<>
			<Carousel items={carouselItems?.items || []} />
		</>
	)
}
