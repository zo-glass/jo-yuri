import styles from './ComingSoon.module.css'

export default function ComingSoon() {
	return (
		<>
			<div className={styles.container}>
				<h1>COMING SOON</h1>
				<p className={styles.paragraph}>Our website is under construction.</p>
				<p className={styles.paragraph}>To see beta version, <a href="https://beta.zo.glass" target="_blank" rel="noopener noreferrer" className={styles.anchor}>click here</a>.</p>
			</div>
		</>
	)
}
