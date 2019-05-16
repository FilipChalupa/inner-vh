# Inner vh

Browser UI aware vh. Utility exposing JavaScript `innerHeight` to CSS.

[302 B](https://bundlephobia.com/result?p=inner-vh@0.0.4) minified and gzipped.

## Demo

Try [this](https://onset.github.io/inner-vh/) in Google Chrome/Firefox on Android.

![Demo](./demo.gif)

## Installation

```bash
npm install inner-vh
```

## Usage

### JavaScript

```javascript
import innerVh from 'inner-vh'

innerVh()
```

```css
body {
	min-height: 100vh; // Fallback for very old browsers
	min-height: calc(var(--innerVh, 1vh) * 100);
}
```
