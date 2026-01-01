import Button from '@/components/ui/Button/Button'

export default function NotFound() {
	return (
		<>
			<div style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center'
			}}>
				<h1>Oops!</h1>
				<h4>There&apos;s nothing <span style={{ color: 'var(--color-pastel-orange)' }}>here</span></h4>
				<br />
				<br />
				<Button path={'/'}>Return Home</Button>
			</div>
		</>
	)
}
