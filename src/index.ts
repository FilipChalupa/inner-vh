export default function innerVh(
	customPropertyName: string | null = 'innerVh',
	onChangeCallback: (innerVhInPx: number) => void = () => {},
	root: HTMLElement = document.documentElement
) {
	const update = () => {
		const innerVhInPx = window.innerHeight / 100
		if (customPropertyName) {
			root.style.setProperty(`--${customPropertyName}`, `${innerVhInPx}px`)
		}
		onChangeCallback(innerVhInPx)
	}

	window.addEventListener('resize', update)
	update()
}
