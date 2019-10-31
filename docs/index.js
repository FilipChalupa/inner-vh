var HEIGHT_CHANGE_THRESHOLD = 100; // maximum height of a collapsible ui of any browser in pixels
export default function innerVh(customPropertyName, onChangeCallback, root, suppressChangesByCollapsibleUiByEducatedGuess) {
    if (customPropertyName === void 0) { customPropertyName = 'innerVh'; }
    if (onChangeCallback === void 0) { onChangeCallback = function () { }; }
    if (root === void 0) { root = document.documentElement; }
    if (suppressChangesByCollapsibleUiByEducatedGuess === void 0) { suppressChangesByCollapsibleUiByEducatedGuess = false; }
    var lastKnownWidth = 0;
    var lastKnownHeight = 0;
    var update = function () {
        var width = window.innerWidth;
        var height = window.innerHeight;
        if (suppressChangesByCollapsibleUiByEducatedGuess &&
            width === lastKnownWidth &&
            Math.abs(height - lastKnownHeight) < HEIGHT_CHANGE_THRESHOLD) {
            return;
        }
        var innerVhInPx = height / 100;
        if (customPropertyName) {
            root.style.setProperty("--" + customPropertyName, innerVhInPx + "px");
        }
        onChangeCallback(innerVhInPx);
        lastKnownWidth = width;
        lastKnownHeight = height;
    };
    window.addEventListener('resize', update);
    update();
}
