import styles from './GridWrapper.module.css'

export default function GridWrapper({ children, columns, mobileColumns }) {
	return (
		<>
			<div
				className={styles.container}
				style={{ 
					'--columns': columns,
					'--mobile-columns': mobileColumns
				}}
			>
				{children}
			</div>
		</>
	)
}
