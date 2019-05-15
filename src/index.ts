function updateCustomProperty(
	customPropertyName: string | null,
	innerVhInPx: number,
	root: HTMLElement
) {
	if (customPropertyName) {
		root.style.setProperty(`--${customPropertyName}`, `${innerVhInPx}px`)
	}
}

export default function innerVh(
	customPropertyName: string | null = 'innerVh',
	onChangeCallback: (innerVhInPx: number) => void = () => {},
	root: HTMLElement = document.documentElement
) {
	const update = () => {
		const innerVhInPx = window.innerHeight / 100
		updateCustomProperty(customPropertyName, innerVhInPx, root)
		onChangeCallback(innerVhInPx)
	}

	window.addEventListener('resize', update)
	update()
}
