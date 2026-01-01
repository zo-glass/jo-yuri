import styles from './LoadingIndicator.module.css'

export default function LoadingIndicator() {
	return (
		<>
			<div className={styles.container}>
				<svg className={styles.svg} viewBox="0 0 50 50">
					<circle className={styles.circle} cx="25" cy="25" r="20" />
				</svg>
			</div>
		</>
	)
}
