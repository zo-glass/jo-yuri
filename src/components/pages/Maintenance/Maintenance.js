import styles from './Maintenance.module.css'

export default function Maintenance() {
	return (
		<>
			<div className={styles.container}>
				<h1>We'll be back.</h1>
				<p className={styles.paragraph}>The requested page is not available.</p>
				<p className={styles.paragraph}>We are performing scheduled maintenance.</p>
				<p className={styles.paragraph}>Please try again <span style={{ color: 'var(--color-pastel-orange)' }}>later</span>.</p>
			</div>
		</>
	)
}
