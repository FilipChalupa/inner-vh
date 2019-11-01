export function innerVh({
	customPropertyName = 'innerVh',
	root = document.documentElement,
	ignoreCollapsibleUi = true,
	maximumCollapsibleUiHeight = 100,
	...options
}: {
	customPropertyName?: string
	onChangeCallback?: (innerVhInPx: number) => void
	root?: HTMLElement
	ignoreCollapsibleUi?: boolean
	maximumCollapsibleUiHeight?: number // in pixels
} = {}) {
	let [lastKnownWidth, lastKnownHeight] = [0, 0]

	const update = () => {
		const [width, height] = [window.innerWidth, window.innerHeight]

		if (
			ignoreCollapsibleUi &&
			width === lastKnownWidth &&
			Math.abs(height - lastKnownHeight) <= maximumCollapsibleUiHeight
		) {
			return
		}

		const innerVhInPx = height / 100
		if (customPropertyName) {
			root.style.setProperty(`--${customPropertyName}`, `${innerVhInPx}px`)
		}
		options.onChangeCallback && options.onChangeCallback(innerVhInPx)
		;[lastKnownWidth, lastKnownHeight] = [width, height]
	}

	window.addEventListener('resize', update)
	update()
}
