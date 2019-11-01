const HEIGHT_CHANGE_THRESHOLD = 100 // maximum height of a collapsible ui of any browser in pixels

export default function innerVh(
	customPropertyName: string | null = 'innerVh',
	onChangeCallback: (innerVhInPx: number) => void = () => {
	},
	root: HTMLElement = document.documentElement,
	suppressChangesByCollapsibleUiByEducatedGuess: boolean = false,
) {
	let lastKnownWidth = 0
	let lastKnownHeight = 0

	const update = () => {
		const width = window.innerWidth
		const height = window.innerHeight

		if (
			suppressChangesByCollapsibleUiByEducatedGuess &&
			width === lastKnownWidth &&
			Math.abs(height - lastKnownHeight) < HEIGHT_CHANGE_THRESHOLD
		) {
			return
		}

		const innerVhInPx = height / 100
		if (customPropertyName) {
			root.style.setProperty(`--${customPropertyName}`, `${innerVhInPx}px`)
		}
		onChangeCallback(innerVhInPx)

		lastKnownWidth = width
		lastKnownHeight = height
	}

	window.addEventListener('resize', update)
	update()
}
