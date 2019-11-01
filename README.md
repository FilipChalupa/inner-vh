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
import { innerVh } from 'inner-vh'

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
import { innerVh } from 'inner-vh'

innerVh({
	customPropertyName: 'rawInnerVh',
	onChangeCallback: (innerVhInPx) => console.log(`innerVh = ${innerVhInPx}px`),
	root: document.documentElement, // Custom property --rawInnerVh will be applied to this element
	ignoreCollapsibleUi: true, // Custom property won't be updated if mobile url bar collapses or expands
	maximumCollapsibleUiHeight: 100 // Height of collapsible ui in pixels. Smaller number reduces false positives.
})
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
