import styles from './GridWrapper.module.css'

export default function GridWrapper({ children, columns }) {
	return (
		<>
			<div
				className={styles.container}
				style={{ '--columns': columns }}
			>
				{children}
			</div>
		</>
	)
}
