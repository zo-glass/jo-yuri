import "./globals.css"
import Header from "@/components/layout/Header/Header"

import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
	subsets: ['latin'],
})

export const metadata = {
	title: "Jo Yuri",
	description: "Jo Yuri",
}

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={montserrat.className}>
			<body>
				<Header />
				<main className="page">
					{children}
				</main>
			</body>
		</html>
	)
}
