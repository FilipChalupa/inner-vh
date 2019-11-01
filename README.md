# Inner vh

Browser UI aware vh. Utility exposing JavaScript `innerHeight` to CSS.

## Demo

Try [this](https://onset.github.io/inner-vh/) in Google Chrome/Firefox on Android or Safari on iOS.

![Demo](./demo.gif)

## Installation

```bash
npm install inner-vh
```

## Usage

### Basic Example

#### JavaScript

```javascript
import innerVh from 'inner-vh'

innerVh()
```

#### CSS

```css
body {
	min-height: 100vh; // Fallback for very old browsers
	min-height: calc(var(--innerVh, 1vh) * 100);
}
```

---

---

### Advanced Example

#### JavaScript

```javascript
import innerVh from 'inner-vh'

innerVh(
	'rawInnerVh', // Custom property name
	(innerVhInPx) => console.log(`innerVh = ${innerVhInPx}px`), // On change callback
	document.documentElement, // Element with custom property,
	true // Suppress changes caused by hiding url bar
)
```

#### CSS

```css
:root {
	--innerHeight: calc(var(--rawInnerVh, 1vh) * 100); /* Fallbacks to 100vh */
}

body {
	min-height: var(--innerHeight);
}
```
