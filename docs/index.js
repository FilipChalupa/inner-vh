var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
export function innerVh(_a) {
    if (_a === void 0) { _a = {}; }
    var _b = _a.customPropertyName, customPropertyName = _b === void 0 ? 'innerVh' : _b, _c = _a.root, root = _c === void 0 ? document.documentElement : _c, _d = _a.ignoreCollapsibleUi, ignoreCollapsibleUi = _d === void 0 ? true : _d, _e = _a.maximumCollapsibleUiHeight, maximumCollapsibleUiHeight = _e === void 0 ? 100 : _e, options = __rest(_a, ["customPropertyName", "root", "ignoreCollapsibleUi", "maximumCollapsibleUiHeight"]);
    var _f = [0, 0], lastKnownWidth = _f[0], lastKnownHeight = _f[1];
    var update = function () {
        var _a;
        var _b = [window.innerWidth, window.innerHeight], width = _b[0], height = _b[1];
        if (ignoreCollapsibleUi &&
            width === lastKnownWidth &&
            Math.abs(height - lastKnownHeight) <= maximumCollapsibleUiHeight) {
            return;
        }
        var innerVhInPx = height / 100;
        if (customPropertyName) {
            root.style.setProperty("--" + customPropertyName, innerVhInPx + "px");
        }
        options.onChangeCallback && options.onChangeCallback(innerVhInPx);
        _a = [width, height], lastKnownWidth = _a[0], lastKnownHeight = _a[1];
    };
    window.addEventListener('resize', update);
    update();
}
