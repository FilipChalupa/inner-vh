# Inner vh

Browser UI aware vh.

[313 B](https://bundlephobia.com/result?p=inner-vh@0.0.1) minified and gzipped.

## Installation

```bash
npm install inner-vh
```

## Usage

### JavaScript

```JavaScript
import innerVh from 'innerVh'

innerVh()
```

```CSS
body {
	min-height: 100vh; // Fallback for very old browsers
	min-height: calc(var(--innerVh, 1vh) * 100);
}
```
