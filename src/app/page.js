import styles from "./page.module.css"

import { fetchApi } from "@/common/apiService"

import Carousel from "@/components/pages/main/Carousel/Carousel"

export default async function Home() {
	const [carouselData] = await Promise.all([fetchApi("carousel")])

	carouselData?.items?.sort((a, b) => b.createdAt - a.createdAt)

	return (
		<>
			<Carousel data={carouselData?.items || []} />
		</>
	)
}
