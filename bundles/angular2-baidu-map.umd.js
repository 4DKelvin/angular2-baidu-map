(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
	typeof define === 'function' && define.amd ? define('angular2-baidu-map', ['exports', '@angular/core'], factory) :
	(factory((global['angular2-baidu-map'] = {}),global.ng.core));
}(this, (function (exports,core) { 'use strict';

function isNull(obj) {
    return obj === null || obj === undefined;
}
function isUndefined(obj) {
    return obj === undefined;
}
function isBoolean(obj) {
    return Object.prototype.toString.call(obj) === '[object Boolean]';
}
function isFunction(obj) {
    return Object.prototype.toString.call(obj) === '[object Function]';
}
function isString(obj) {
    return Object.prototype.toString.call(obj) === '[object String]';
}
function omit(obj) {
    var keys = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        keys[_i - 1] = arguments[_i];
    }
    var rawKeys = Object.keys(obj);
    var finalKeys = rawKeys.filter(function (k) { return keys.indexOf(k) < 0; });
    return finalKeys.reduce(function (p, v) {
        p[v] = obj[v];
        return p;
    }, ({}));
}
function toPoint(opts) {
    if (!opts) {
        return new window.BMap.Point();
    }
    return new window.BMap.Point(opts.lng, opts.lat);
}
function toPoints(opts) {
    if (!opts) {
        return [];
    }
    return opts.map(function (p) {
        return new window.BMap.Point(p.lng, p.lat);
    });
}
function toSize(opts) {
    if (!opts) {
        return new window.BMap.Size();
    }
    return new window.BMap.Size(opts.width, opts.height);
}
function toIcon(url, size, options) {
    if (!size && !options) {
        return new window.BMap.Icon(url);
    }
    if (!size) {
        return new window.BMap.Icon(url, toSize(size));
    }
    var iconOptions = {
        anchor: toSize(options.anchor),
        imageOffset: toSize(options.imageOffset),
        infoWindowAnchor: toSize(options.infoWindowAnchor),
        printImageUrl: options.printImageUrl
    };
    var icon = new window.BMap.Icon(url, toSize(size), iconOptions);
    if (options.imageSize) {
        icon.setImageSize(toSize(options.imageSize));
    }
    return icon;
}
function toMarkerOptions(options) {
    var opts = {};
    if (!options) {
        return opts;
    }
    if (options.offset) {
        opts.offset = toSize(options.offset);
    }
    if (options.icon) {
        opts.icon = toIcon(options.icon.imageUrl, options.icon.size, options.icon);
    }
    if (!isNull(options.enableMassClear)) {
        opts.enableMassClear = options.enableMassClear;
    }
    if (!isNull(options.enableDragging)) {
        opts.enableDragging = options.enableDragging;
    }
    if (!isNull(options.enableClicking)) {
        opts.enableClicking = options.enableClicking;
    }
    if (!isNull(options.raiseOnDrag)) {
        opts.raiseOnDrag = options.raiseOnDrag;
    }
    if (!isNull(options.draggingCursor)) {
        opts.draggingCursor = options.draggingCursor;
    }
    if (!isNull(options.rotation)) {
        opts.rotation = options.rotation;
    }
    if (!isNull(options.title)) {
        opts.title = options.title;
    }
    if (!isNull(options.shadow)) {
        opts.shadow = toIcon(options.shadow.imageUrl, options.shadow.size, options.shadow);
    }
    return opts;
}
function toNavigationControlOptions(options) {
    var opts = {};
    if (!options) {
        return opts;
    }
    if (!isNull(options.anchor)) {
        opts.anchor = options.anchor;
    }
    if (!isNull(options.enableGeolocation)) {
        opts.enableGeolocation = options.enableGeolocation;
    }
    if (!isNull(options.offset)) {
        opts.offset = toSize(options.offset);
    }
    if (!isNull(options.showZoomInfo)) {
        opts.showZoomInfo = options.showZoomInfo;
    }
    if (!isNull(options.type)) {
        opts.type = options.type;
    }
    return opts;
}
function toOverviewMapControlOptions(options) {
    var opts = {};
    if (!options) {
        return opts;
    }
    if (!isNull(options.anchor)) {
        opts.anchor = options.anchor;
    }
    if (!isNull(options.isOpen)) {
        opts.isOpen = options.isOpen;
    }
    if (!isNull(options.offset)) {
        opts.offset = toSize(options.offset);
    }
    if (!isNull(options.size)) {
        opts.size = toSize(options.size);
    }
    return opts;
}
function toScaleControlOptions(options) {
    var opts = {};
    if (!options) {
        return opts;
    }
    if (!isNull(options.anchor)) {
        opts.anchor = options.anchor;
    }
    if (!isNull(options.offset)) {
        opts.offset = toSize(options.offset);
    }
    return opts;
}
function toMapTypeControlOptions(options) {
    var opts = {};
    if (!options) {
        return opts;
    }
    if (!isNull(options.type)) {
        opts.type = options.type;
    }
    return opts;
}
function toGeolocationOptions(options) {
    var opts = {};
    if (!options) {
        return opts;
    }
    if (!isNull(options.anchor)) {
        opts.anchor = options.anchor;
    }
    if (!isNull(options.offset)) {
        opts.offset = toSize(options.offset);
    }
    if (!isNull(options.enableAutoLocation)) {
        opts.enableAutoLocation = options.enableAutoLocation;
    }
    if (!isNull(options.locationIcon)) {
        opts.locationIcon = toIcon(options.locationIcon.imageUrl, options.locationIcon.size, options.locationIcon);
    }
    if (!isNull(options.showAddressBar)) {
        opts.showAddressBar = options.showAddressBar;
    }
    return opts;
}
function toTextIconStyle(style) {
    var realStyle = {
        url: style.url,
        size: toSize(style.size)
    };
    if (style.anchor) {
        realStyle.anchor = toSize(style.anchor);
    }
    if (style.offset) {
        realStyle.offset = toSize(style.offset);
    }
    if (!isNull(style.textSize)) {
        realStyle.textSize = style.textSize;
    }
    if (!isNull(style.textColor)) {
        realStyle.textColor = style.textColor;
    }
    return realStyle;
}
function toMarkerClustererOptions(options) {
    var opts = {};
    if (!options) {
        return opts;
    }
    if (options.markers) {
        opts.markers = options.markers.map(function (m) { return new window.BMap.Marker(toPoint(m.point), toMarkerOptions(m.options)); });
    }
    if (!isNull(options.girdSize)) {
        opts.girdSize = options.girdSize;
    }
    if (!isNull(options.maxZoom)) {
        opts.maxZoom = options.maxZoom;
    }
    if (!isNull(options.minClusterSize)) {
        opts.minClusterSize = options.minClusterSize;
    }
    if (!isNull(options.isAverangeCenter)) {
        opts.isAverangeCenter = options.isAverangeCenter;
    }
    if (options.styles) {
        opts.styles = options.styles.filter(function (s) { return s; }).map(function (s) { return toTextIconStyle(s); });
    }
    return opts;
}
function nullCheck(obj, msg) {
    if (isNull(obj)) {
        throw new Error(msg);
    }
}
var LOADING_STATE = {
    NON: 0,
    LOADED: 1,
    LOADING: 2,
};
LOADING_STATE[LOADING_STATE.NON] = "NON";
LOADING_STATE[LOADING_STATE.LOADED] = "LOADED";
LOADING_STATE[LOADING_STATE.LOADING] = "LOADING";
var ScriptLoaderConfig = /** @class */ (function () {
    function ScriptLoaderConfig() {
        this.ak = '';
    }
    return ScriptLoaderConfig;
}());
window._scriptLoadState = {};
window._loadingCallbacks = {};
var ScriptLoader = /** @class */ (function () {
    function ScriptLoader() {
    }
    ScriptLoader.prototype.load = function (url, isMain, cb) {
        if (isMain === void 0) { isMain = false; }
        var scriptKey = isString(url) ? url : url['key'];
        var scriptUrls = isString(url) ? [url] : url['scripts'];
        if (window._scriptLoadState[scriptKey] === LOADING_STATE.LOADED) {
            if (isMain) {
                switchDisplay('baidu-map .baidu-map-instance', 'block');
                switchDisplay('baidu-map .baidu-map-offline', 'none');
            }
            return cb();
        }
        if (!window._loadingCallbacks[scriptKey]) {
            window._loadingCallbacks[scriptKey] = [];
        }
        if (window._scriptLoadState[scriptKey] === LOADING_STATE.LOADING) {
            window._loadingCallbacks[scriptKey].push(cb);
            return;
        }
        window._scriptLoadState[scriptKey] = LOADING_STATE.LOADING;
        window._loadingCallbacks[scriptKey].push(cb);
        if (isMain) {
            window.baidumapinit = function () {
                window._scriptLoadState[scriptKey] = LOADING_STATE.LOADED;
                switchDisplay('baidu-map .baidu-map-instance', 'block');
                switchDisplay('baidu-map .baidu-map-offline', 'none');
                window._loadingCallbacks[scriptKey].forEach(function (c) {
                    c();
                });
            };
        }
        appendScriptsTag(scriptKey, scriptUrls, isMain);
    };
    return ScriptLoader;
}());
ScriptLoader.decorators = [
    { type: core.Injectable },
];
function appendScriptsTag(scriptKey, urls, isMain) {
    var leftObj = {
        count: urls.length
    };
    urls.forEach(function (url) {
        appendScriptTag(scriptKey, url, isMain, leftObj);
    });
}
function appendScriptTag(scriptKey, url, isMain, leftObj) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    script.onerror = function () {
        if (isMain) {
            switchDisplay('baidu-map .baidu-map-offline', 'block');
            switchDisplay('baidu-map .baidu-map-instance', 'none');
        }
        document.body.removeChild(script);
        setTimeout(function () {
            appendScriptTag(scriptKey, url, isMain, leftObj);
        }, 30000);
    };
    if (!isMain) {
        script.onload = function () {
            leftObj.count--;
            if (leftObj.count) {
                return;
            }
            window._scriptLoadState[scriptKey] = LOADING_STATE.LOADED;
            window._loadingCallbacks[scriptKey].forEach(function (c) {
                c();
            });
        };
    }
    document.body.appendChild(script);
}
function switchDisplay(selector, state) {
    Array.prototype.slice.call(document.querySelectorAll(selector)).forEach(function (node) {
        node.style.display = state;
    });
}
var MapTypeEnum = {
    BMAP_NORMAL_MAP: 'BMAP_NORMAL_MAP',
    BMAP_PERSPECTIVE_MAP: 'BMAP_PERSPECTIVE_MAP',
    BMAP_SATELLITE_MAP: 'BMAP_SATELLITE_MAP',
    BMAP_HYBRID_MAP: 'BMAP_HYBRID_MAP',
};
function isMapTypeEnum(maptype) {
    return !isFunction(((maptype)).getTileLayer);
}
var MapService = /** @class */ (function () {
    function MapService(config, _loader) {
        var _this = this;
        this._loader = _loader;
        nullCheck(config.ak, 'ak must be provided');
        this._config = config;
        this._map = new Promise(function (resolve) {
            _this._mapResolver = resolve;
        });
    }
    MapService.prototype.createMap = function (el, mapOptions) {
        var _this = this;
        var URL = "https://api.map.baidu.com/api?v=2.0&ak=" + this._config.ak + "&callback=baidumapinit&s=1";
        return new Promise(function (resolve) {
            _this._loader.load(URL, true, function () {
                var map = new window.BMap.Map(el, omit(mapOptions, 'mapType'));
                _this.setOptions(mapOptions);
                _this._mapResolver(map);
                resolve(map);
            });
        });
    };
    MapService.prototype.setOptions = function (opts) {
        var disableDragging = opts.disableDragging, enableScrollWheelZoom = opts.enableScrollWheelZoom, disableDoubleClickZoom = opts.disableDoubleClickZoom, enableKeyboard = opts.enableKeyboard, enableInertialDragging = opts.enableInertialDragging, enableAutoResize = opts.enableAutoResize, enableContinuousZoom = opts.enableContinuousZoom, disablePinchToZoom = opts.disablePinchToZoom;
        if (isBoolean(disableDragging)) {
            this._map.then(function (map) { return map[(disableDragging ? 'disable' : 'enable') + 'Dragging'](); });
        }
        if (isBoolean(enableScrollWheelZoom)) {
            this._map.then(function (map) { return map[(enableScrollWheelZoom ? 'enable' : 'disable') + 'ScrollWheelZoom'](); });
        }
        if (isBoolean(enableAutoResize)) {
            this._map.then(function (map) { return map[(enableAutoResize ? 'enable' : 'disable') + 'AutoResize'](); });
        }
        if (isBoolean(disableDoubleClickZoom)) {
            this._map.then(function (map) { return map[(disableDoubleClickZoom ? 'disable' : 'enable') + 'DoubleClickZoom'](); });
        }
        if (isBoolean(enableKeyboard)) {
            this._map.then(function (map) { return map[(enableKeyboard ? 'enable' : 'disable') + 'Keyboard'](); });
        }
        if (isBoolean(enableInertialDragging)) {
            this._map.then(function (map) { return map[(enableInertialDragging ? 'enable' : 'disable') + 'InertialDragging'](); });
        }
        if (isBoolean(enableContinuousZoom)) {
            this._map.then(function (map) { return map[(enableContinuousZoom ? 'enable' : 'disable') + 'ContinuousZoom'](); });
        }
        if (isBoolean(disablePinchToZoom)) {
            this._map.then(function (map) { return map[(disablePinchToZoom ? 'disable' : 'enable') + 'PinchToZoom'](); });
        }
        if (!isNull(opts.cursor)) {
            this._map.then(function (map) { return map.setDefaultCursor(opts.cursor); });
        }
        if (!isNull(opts.draggingCursor)) {
            this._map.then(function (map) { return map.setDraggingCursor(opts.draggingCursor); });
        }
        if (!isNull(opts.currentCity)) {
            this._map.then(function (map) { return map.setCurrentCity(opts.currentCity); });
        }
        if (!isNull(opts.centerAndZoom)) {
            this._map.then(function (map) {
                map.centerAndZoom(toPoint(opts.centerAndZoom), opts.centerAndZoom.zoom);
            });
        }
        if (!isNull(opts.mapType)) {
            this._map.then(function (map) {
                var realType = isMapTypeEnum(opts.mapType) ? window[opts.mapType] : opts.mapType;
                map.setMapType(realType);
            });
        }
    };
    MapService.prototype.addOverlay = function (cb) {
        return this._map.then(function (map) {
            var overlay = cb(map);
            map.addOverlay(overlay);
            return { map: map, overlay: overlay };
        });
    };
    MapService.prototype.removeOverlay = function (overlay) {
        return this._map.then(function (map) {
            map.removeOverlay(overlay);
        });
    };
    MapService.prototype.addTileLayer = function (cb) {
        return this._map.then(function (map) {
            var tilelayer = cb(map);
            map.addTileLayer(tilelayer);
            return { map: map, tilelayer: tilelayer };
        });
    };
    MapService.prototype.removeTileLayer = function (tilelayer) {
        return this._map.then(function (map) {
            map.removeOverlay(tilelayer);
        });
    };
    MapService.prototype.addControl = function (cb) {
        return this._map.then(function (map) {
            var control = cb(map);
            map.addControl(control);
            return { map: map, control: control };
        });
    };
    MapService.prototype.removeControl = function (control) {
        return this._map.then(function (map) {
            map.removeControl(control);
        });
    };
    MapService.prototype.getNativeMap = function () {
        return this._map;
    };
    return MapService;
}());
MapService.decorators = [
    { type: core.Injectable },
];
MapService.ctorParameters = function () { return [
    { type: ScriptLoaderConfig, decorators: [{ type: core.Inject, args: [ScriptLoaderConfig,] },] },
    { type: ScriptLoader, },
]; };
var ControlComponent = /** @class */ (function () {
    function ControlComponent(_service) {
        this._service = _service;
        this.loaded = new core.EventEmitter();
    }
    ControlComponent.prototype.ngOnInit = function () {
        var _this = this;
        nullCheck(this.type, 'type is required for <control>');
        this._service
            .addControl(function () {
            _this.control = _this.createControl(_this.type, _this.options);
            return _this.control;
        })
            .then(function (_a) {
            var control = _a.control;
            _this.loaded.emit(control);
        });
    };
    ControlComponent.prototype.ngOnDestroy = function () {
        this._service.removeControl(this.control);
    };
    ControlComponent.prototype.createControl = function (type, options) {
        if (type === 'navigation') {
            return new window.BMap.NavigationControl(toNavigationControlOptions(options));
        }
        if (type === 'overviewmap') {
            return new window.BMap.OverviewMapControl(toOverviewMapControlOptions(options));
        }
        if (type === 'scale') {
            return new window.BMap.ScaleControl(toScaleControlOptions(options));
        }
        if (type === 'maptype') {
            return new window.BMap.MapTypeControl(toMapTypeControlOptions(options));
        }
        if (type === 'geolocation') {
            return new window.BMap.GeolocationControl(toGeolocationOptions(options));
        }
        if (type === 'panorama') {
            return new window.BMap.PanoramaControl();
        }
        throw new Error("Unsupported type:" + type + " of control");
    };
    return ControlComponent;
}());
ControlComponent.decorators = [
    { type: core.Directive, args: [{
                selector: 'control'
            },] },
];
ControlComponent.ctorParameters = function () { return [
    { type: MapService, },
]; };
ControlComponent.propDecorators = {
    "type": [{ type: core.Input },],
    "options": [{ type: core.Input },],
    "loaded": [{ type: core.Output },],
};
var MapComponent = /** @class */ (function () {
    function MapComponent(_service) {
        this._service = _service;
        this.loaded = new core.EventEmitter();
        this.clicked = new core.EventEmitter();
    }
    MapComponent.prototype.ngOnInit = function () {
        var _this = this;
        nullCheck(this.options, 'options is required for <baidu-map>');
        nullCheck(this.options.centerAndZoom, 'options.centerAndZoom is required for <baidu-map>');
        this._service
            .createMap(this.mapInstance.nativeElement, this.options)
            .then(function (map) {
            _this.loaded.emit(map);
            return map;
        })
            .then(function (map) {
            _this.addListener(map);
        });
    };
    MapComponent.prototype.ngOnChanges = function (changes) {
        var opts = (changes["options"].currentValue);
        this._service.setOptions(opts);
    };
    MapComponent.prototype.ngOnDestroy = function () {
        console.log('on map destroy');
    };
    MapComponent.prototype.addListener = function (map) {
        var _this = this;
        map.addEventListener('click', function (e) {
            _this.clicked.emit(e);
        });
    };
    return MapComponent;
}());
MapComponent.decorators = [
    { type: core.Component, args: [{
                providers: [MapService],
                selector: 'baidu-map',
                styles: [
                    "\n        .baidu-map-instance {\n            width: 100%;\n            height: 100%;\n            display: none;\n        }\n        .baidu-map-offline {\n            width: 100%;\n            height: 100%;\n            background-color: #E6E6E6;\n            position: relative;\n            display: none;\n        }\n        .baidu-map-offline label {\n            fontSize: 30px;\n            margin: 0;\n            position: absolute;\n            top: 50%;\n            left: 50%;\n            margin-right: -50%;\n            transform: translate(-50%, -50%);\n        }\n        .tranclude-content {\n            display: none;\n        }\n        "
                ],
                template: "\n    <div #mapinstance class=\"baidu-map-instance\"></div>\n    <div class=\"baidu-map-offline\">\n        <label>{{ 'NO_NETWORK' }}</label>\n    </div>\n    <div class=\"tranclude-content\">\n        <ng-content></ng-content>\n    </div>\n    "
            },] },
];
MapComponent.ctorParameters = function () { return [
    { type: MapService, },
]; };
MapComponent.propDecorators = {
    "options": [{ type: core.Input },],
    "loaded": [{ type: core.Output },],
    "clicked": [{ type: core.Output },],
    "mapInstance": [{ type: core.ViewChild, args: ['mapinstance',] },],
};
var MarkerComponent = /** @class */ (function () {
    function MarkerComponent(_service) {
        this._service = _service;
        this.loaded = new core.EventEmitter();
        this.clicked = new core.EventEmitter();
    }
    MarkerComponent.prototype.ngOnInit = function () {
        var _this = this;
        nullCheck(this.point, 'point is required for <marker>');
        this._service
            .addOverlay(function () {
            return (_this.marker = new window.BMap.Marker(toPoint(_this.point), toMarkerOptions(_this.options)));
        })
            .then(function (_a) {
            var map = _a.map;
            _this.loaded.emit(_this.marker);
            _this.addListener(_this.marker, map);
        })
            .then(function () {
            _this.marker.setPosition(new window.BMap.Point(_this.point.lng, _this.point.lat));
        });
    };
    MarkerComponent.prototype.ngOnChanges = function (changes) {
        if (changes["point"] && !changes["point"].isFirstChange()) {
            this.marker.setPosition(toPoint(changes["point"].currentValue));
        }
        if (changes["options"] && !changes["options"].isFirstChange()) {
            this.setOptions(changes["options"].currentValue);
        }
    };
    MarkerComponent.prototype.ngOnDestroy = function () {
        this._service.removeOverlay(this.marker);
    };
    MarkerComponent.prototype.setOptions = function (options) {
        if (isNull(options)) {
            return;
        }
        if (!isNull(options.offset)) {
            this.marker.setOffset(toSize(options.offset));
        }
        if (!isNull(options.icon)) {
            this.marker.setIcon(toIcon(options.icon.imageUrl, options.icon.size, options.icon));
        }
        if (!isNull(options.enableMassClear)) {
            this.marker[(options.enableMassClear ? 'enable' : 'disable') + 'MassClear']();
        }
        if (!isNull(options.enableDragging)) {
            this.marker[(options.enableDragging ? 'enable' : 'disable') + 'Dragging']();
        }
        if (!isNull(options.rotation)) {
            this.marker.setRotation(options.rotation);
        }
        if (!isNull(options.shadow)) {
            this.marker.setShadow(toIcon(options.shadow.imageUrl, options.shadow.size, options.shadow));
        }
        if (!isNull(options.title)) {
            this.marker.setTitle(options.title);
        }
    };
    MarkerComponent.prototype.addListener = function (marker, map) {
        var _this = this;
        marker.addEventListener('click', function (e) {
            _this.clicked.emit({
                e: e,
                map: map,
                marker: marker
            });
        });
    };
    return MarkerComponent;
}());
MarkerComponent.decorators = [
    { type: core.Directive, args: [{
                selector: 'marker'
            },] },
];
MarkerComponent.ctorParameters = function () { return [
    { type: MapService, },
]; };
MarkerComponent.propDecorators = {
    "point": [{ type: core.Input },],
    "options": [{ type: core.Input },],
    "loaded": [{ type: core.Output },],
    "clicked": [{ type: core.Output },],
};
var PolylineComponent = /** @class */ (function () {
    function PolylineComponent(_service) {
        this._service = _service;
        this.loaded = new core.EventEmitter();
    }
    PolylineComponent.prototype.ngOnInit = function () {
        var _this = this;
        nullCheck(this.points, 'points is required for <polyline>');
        this._service
            .addOverlay(function () {
            return (_this.polyline = new window.BMap.Polyline(toPoints(_this.points), _this.options));
        })
            .then(function () {
            _this.loaded.emit(_this.polyline);
        });
    };
    PolylineComponent.prototype.ngOnChanges = function (changes) {
        if (changes["points"] && !changes["points"].isFirstChange()) {
            this.polyline.setPath(toPoints(changes["points"].currentValue));
        }
        if (changes["options"] && !changes["options"].isFirstChange()) {
            this.setOptions(changes["options"].currentValue);
        }
    };
    PolylineComponent.prototype.ngOnDestroy = function () {
        this._service.removeOverlay(this.polyline);
    };
    PolylineComponent.prototype.setOptions = function (options) {
        if (isNull(options)) {
            return;
        }
        if (!isUndefined(options.enableEditing)) {
            if (options.enableEditing) {
                this.polyline.enableEditing();
            }
            else {
                this.polyline.disableEditing();
            }
        }
        if (!isUndefined(options.enableMassClear)) {
            if (options.enableEditing) {
                this.polyline.enableMassClear();
            }
            else {
                this.polyline.disableMassClear();
            }
        }
        if (!isUndefined(options.strokeColor)) {
            this.polyline.setStrokeColor(options.strokeColor);
        }
        if (!isUndefined(options.strokeOpacity)) {
            this.polyline.setStrokeOpacity(options.strokeOpacity);
        }
        if (!isUndefined(options.strokeStyle)) {
            this.polyline.setStrokeStyle(options.strokeStyle);
        }
        if (!isUndefined(options.strokeWeight)) {
            this.polyline.setStrokeWeight(options.strokeWeight);
        }
    };
    return PolylineComponent;
}());
PolylineComponent.decorators = [
    { type: core.Directive, args: [{
                selector: 'polyline'
            },] },
];
PolylineComponent.ctorParameters = function () { return [
    { type: MapService, },
]; };
PolylineComponent.propDecorators = {
    "points": [{ type: core.Input },],
    "options": [{ type: core.Input },],
    "loaded": [{ type: core.Output },],
};
var CircleComponent = /** @class */ (function () {
    function CircleComponent(_service) {
        this._service = _service;
        this.loaded = new core.EventEmitter();
    }
    CircleComponent.prototype.ngOnInit = function () {
        var _this = this;
        nullCheck(this.center, 'center is required for <circle>');
        nullCheck(this.radius, 'center is required for <circle>');
        this._service
            .addOverlay(function () {
            return (_this.circle = new window.BMap.Circle(toPoint(_this.center), _this.radius, _this.options));
        })
            .then(function () {
            _this.loaded.emit(_this.circle);
        });
    };
    CircleComponent.prototype.ngOnChanges = function (changes) {
        if (changes["center"] && !changes["center"].isFirstChange()) {
            this.circle.setCenter(toPoint(changes["center"].currentValue));
        }
        if (changes["radius"] && !changes["radius"].isFirstChange()) {
            this.circle.setRadius(changes["radius"].currentValue);
        }
        if (changes["options"] && !changes["options"].isFirstChange()) {
            this.setOptions(changes["options"].currentValue);
        }
    };
    CircleComponent.prototype.ngOnDestroy = function () {
        this._service.removeOverlay(this.circle);
    };
    CircleComponent.prototype.setOptions = function (options) {
        if (isNull(options)) {
            return;
        }
        if (!isUndefined(options.enableEditing)) {
            if (options.enableEditing) {
                this.circle.enableEditing();
            }
            else {
                this.circle.disableEditing();
            }
        }
        if (!isUndefined(options.enableMassClear)) {
            if (options.enableEditing) {
                this.circle.enableMassClear();
            }
            else {
                this.circle.disableMassClear();
            }
        }
        if (!isUndefined(options.strokeColor)) {
            this.circle.setStrokeColor(options.strokeColor);
        }
        if (!isUndefined(options.fillColor)) {
            this.circle.setFillColor(options.fillColor);
        }
        if (!isUndefined(options.strokeOpacity)) {
            this.circle.setStrokeOpacity(options.strokeOpacity);
        }
        if (!isUndefined(options.fillOpacity)) {
            this.circle.setFillOpacity(options.fillOpacity);
        }
        if (!isUndefined(options.strokeStyle)) {
            this.circle.setStrokeStyle(options.strokeStyle);
        }
        if (!isUndefined(options.strokeWeight)) {
            this.circle.setStrokeWeight(options.strokeWeight);
        }
    };
    return CircleComponent;
}());
CircleComponent.decorators = [
    { type: core.Directive, args: [{
                selector: 'circle'
            },] },
];
CircleComponent.ctorParameters = function () { return [
    { type: MapService, },
]; };
CircleComponent.propDecorators = {
    "center": [{ type: core.Input },],
    "radius": [{ type: core.Input },],
    "options": [{ type: core.Input },],
    "loaded": [{ type: core.Output },],
};
var PolygonComponent = /** @class */ (function () {
    function PolygonComponent(_service) {
        this._service = _service;
        this.loaded = new core.EventEmitter();
    }
    PolygonComponent.prototype.ngOnInit = function () {
        var _this = this;
        nullCheck(this.points, 'points is required for <polygon>');
        this._service
            .addOverlay(function () {
            return (_this.polygon = new window.BMap.Polygon(toPoints(_this.points), _this.options));
        })
            .then(function () {
            _this.loaded.emit(_this.polygon);
        });
    };
    PolygonComponent.prototype.ngOnChanges = function (changes) {
        if (changes["points"] && !changes["points"].isFirstChange()) {
            this.polygon.setPath(toPoints(changes["points"].currentValue));
        }
        if (changes["options"] && !changes["options"].isFirstChange()) {
            this.setOptions(changes["options"].currentValue);
        }
    };
    PolygonComponent.prototype.ngOnDestroy = function () {
        this._service.removeOverlay(this.polygon);
    };
    PolygonComponent.prototype.setOptions = function (options) {
        if (isNull(options)) {
            return;
        }
        if (!isUndefined(options.enableEditing)) {
            if (options.enableEditing) {
                this.polygon.enableEditing();
            }
            else {
                this.polygon.disableEditing();
            }
        }
        if (!isUndefined(options.enableMassClear)) {
            if (options.enableEditing) {
                this.polygon.enableMassClear();
            }
            else {
                this.polygon.disableMassClear();
            }
        }
        if (!isUndefined(options.strokeColor)) {
            this.polygon.setStrokeColor(options.strokeColor);
        }
        if (!isUndefined(options.fillColor)) {
            this.polygon.setFillColor(options.fillColor);
        }
        if (!isUndefined(options.strokeOpacity)) {
            this.polygon.setStrokeOpacity(options.strokeOpacity);
        }
        if (!isUndefined(options.fillOpacity)) {
            this.polygon.setFillOpacity(options.fillOpacity);
        }
        if (!isUndefined(options.strokeStyle)) {
            this.polygon.setStrokeStyle(options.strokeStyle);
        }
        if (!isUndefined(options.strokeWeight)) {
            this.polygon.setStrokeWeight(options.strokeWeight);
        }
    };
    return PolygonComponent;
}());
PolygonComponent.decorators = [
    { type: core.Directive, args: [{
                selector: 'polygon'
            },] },
];
PolygonComponent.ctorParameters = function () { return [
    { type: MapService, },
]; };
PolygonComponent.propDecorators = {
    "points": [{ type: core.Input },],
    "options": [{ type: core.Input },],
    "loaded": [{ type: core.Output },],
};
var LIB_URL = "https://api.map.baidu.com/library/Heatmap/2.0/src/Heatmap_min.js";
var HeatmapComponent = /** @class */ (function () {
    function HeatmapComponent(_service, scriptLoader) {
        this._service = _service;
        this.scriptLoader = scriptLoader;
        this.loaded = new core.EventEmitter();
    }
    HeatmapComponent.prototype.ngOnInit = function () {
        var _this = this;
        nullCheck(this.dataset, 'dataset is required for <heatmap>');
        this._service.getNativeMap().then(function () {
            return _this.scriptLoader.load(LIB_URL, false, function () {
                _this._service
                    .addOverlay(function () {
                    return (_this.heatmap = new window.BMapLib.HeatmapOverlay(_this.options));
                })
                    .then(function () {
                    _this.loaded.emit(_this.heatmap);
                    if (_this.dataset) {
                        _this.heatmap.setDataSet(_this.dataset);
                    }
                });
            });
        });
    };
    HeatmapComponent.prototype.ngOnChanges = function (changes) {
        if (changes["dataset"] && !changes["dataset"].isFirstChange()) {
            this.heatmap.setDataSet(changes["dataset"].currentValue);
        }
        if (changes["options"] && !changes["options"].isFirstChange()) {
            this.heatmap.setOptions(changes["options"].currentValue);
        }
    };
    HeatmapComponent.prototype.ngOnDestroy = function () {
        this._service.removeOverlay(this.heatmap);
    };
    return HeatmapComponent;
}());
HeatmapComponent.decorators = [
    { type: core.Directive, args: [{
                selector: 'heatmap'
            },] },
];
HeatmapComponent.ctorParameters = function () { return [
    { type: MapService, },
    { type: ScriptLoader, },
]; };
HeatmapComponent.propDecorators = {
    "dataset": [{ type: core.Input },],
    "options": [{ type: core.Input },],
    "loaded": [{ type: core.Output },],
};
var TileLayderComponent = /** @class */ (function () {
    function TileLayderComponent(_service) {
        this._service = _service;
        this.loaded = new core.EventEmitter();
    }
    TileLayderComponent.prototype.ngOnInit = function () {
        var _this = this;
        var func = this.getTilesUrl;
        this._service
            .addTileLayer(function () {
            _this.tilelayer = new window.BMap.TileLayer(_this.options);
            if (_this.getTilesUrl) {
                _this.tilelayer.getTilesUrl = function (tileCoord, zoom) {
                    return func(tileCoord, zoom);
                };
            }
            return _this.tilelayer;
        })
            .then(function () {
            _this.loaded.emit(_this.tilelayer);
        });
    };
    TileLayderComponent.prototype.ngOnDestroy = function () {
        this._service.removeTileLayer(this.tilelayer);
    };
    return TileLayderComponent;
}());
TileLayderComponent.decorators = [
    { type: core.Directive, args: [{
                selector: 'tilelayer'
            },] },
];
TileLayderComponent.ctorParameters = function () { return [
    { type: MapService, },
]; };
TileLayderComponent.propDecorators = {
    "getTilesUrl": [{ type: core.Input },],
    "options": [{ type: core.Input },],
    "loaded": [{ type: core.Output },],
};
var TrafficLayderComponent = /** @class */ (function () {
    function TrafficLayderComponent(_service) {
        this._service = _service;
        this.loaded = new core.EventEmitter();
    }
    TrafficLayderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._service
            .addTileLayer(function () {
            _this.trafficlayer = new window.BMap.TrafficLayer(_this.options);
            return _this.trafficlayer;
        })
            .then(function () {
            _this.loaded.emit(_this.trafficlayer);
        });
    };
    TrafficLayderComponent.prototype.ngOnDestroy = function () {
        this._service.removeTileLayer(this.trafficlayer);
    };
    return TrafficLayderComponent;
}());
TrafficLayderComponent.decorators = [
    { type: core.Directive, args: [{
                selector: 'trafficlayer'
            },] },
];
TrafficLayderComponent.ctorParameters = function () { return [
    { type: MapService, },
]; };
TrafficLayderComponent.propDecorators = {
    "options": [{ type: core.Input },],
    "loaded": [{ type: core.Output },],
};
var LIB_URLS = {
    key: 'markerClusterer',
    scripts: [
        'https://api.map.baidu.com/library/MarkerClusterer/1.2/src/MarkerClusterer_min.js',
        'https://api.map.baidu.com/library/TextIconOverlay/1.2/src/TextIconOverlay_min.js'
    ]
};
var MarkerClustererComponent = /** @class */ (function () {
    function MarkerClustererComponent(_service, scriptLoader) {
        this._service = _service;
        this.scriptLoader = scriptLoader;
        this.loaded = new core.EventEmitter();
    }
    MarkerClustererComponent.prototype.ngOnInit = function () {
        var _this = this;
        nullCheck(this.options, 'options is required for <marker-clusterer>');
        this._service.getNativeMap().then(function (map) {
            return _this.scriptLoader.load(LIB_URLS, false, function () {
                _this.markerClusterer = new window.BMapLib.MarkerClusterer(map, toMarkerClustererOptions(_this.options));
                _this.loaded.emit(_this.markerClusterer);
            });
        });
    };
    MarkerClustererComponent.prototype.ngOnChanges = function (changes) {
        if (changes["options"] && !changes["options"].isFirstChange()) {
            this.resetOptions(changes["options"].currentValue);
        }
    };
    MarkerClustererComponent.prototype.resetOptions = function (options) {
        if (options.markers) {
            this.markerClusterer.clearMarkers();
            this.markerClusterer.addMarkers(options.markers.map(function (m) { return new window.BMap.Marker(toPoint(m.point), toMarkerOptions(m.options)); }));
        }
        if (!isUndefined(options.girdSize)) {
            this.markerClusterer.setGridSize(options.girdSize);
        }
        if (!isUndefined(options.maxZoom)) {
            this.markerClusterer.setMaxZoom(options.maxZoom);
        }
        if (options.styles) {
            this.markerClusterer.setStyles(options.styles.filter(function (s) { return s; }).map(function (s) { return toTextIconStyle(s); }));
        }
    };
    MarkerClustererComponent.prototype.ngOnDestroy = function () {
        this.markerClusterer.clearMarkers();
    };
    return MarkerClustererComponent;
}());
MarkerClustererComponent.decorators = [
    { type: core.Directive, args: [{
                selector: 'marker-clusterer'
            },] },
];
MarkerClustererComponent.ctorParameters = function () { return [
    { type: MapService, },
    { type: ScriptLoader, },
]; };
MarkerClustererComponent.propDecorators = {
    "options": [{ type: core.Input },],
    "loaded": [{ type: core.Output },],
};
var ControlAnchor = {
    BMAP_ANCHOR_TOP_LEFT: 0,
    BMAP_ANCHOR_TOP_RIGHT: 1,
    BMAP_ANCHOR_BOTTOM_LEFT: 2,
    BMAP_ANCHOR_BOTTOM_RIGHT: 3,
};
ControlAnchor[ControlAnchor.BMAP_ANCHOR_TOP_LEFT] = "BMAP_ANCHOR_TOP_LEFT";
ControlAnchor[ControlAnchor.BMAP_ANCHOR_TOP_RIGHT] = "BMAP_ANCHOR_TOP_RIGHT";
ControlAnchor[ControlAnchor.BMAP_ANCHOR_BOTTOM_LEFT] = "BMAP_ANCHOR_BOTTOM_LEFT";
ControlAnchor[ControlAnchor.BMAP_ANCHOR_BOTTOM_RIGHT] = "BMAP_ANCHOR_BOTTOM_RIGHT";
var NavigationControlType = {
    BMAP_NAVIGATION_CONTROL_LARGE: 0,
    BMAP_NAVIGATION_CONTROL_SMALL: 1,
    BMAP_NAVIGATION_CONTROL_PAN: 2,
    BMAP_NAVIGATION_CONTROL_ZOOM: 3,
};
NavigationControlType[NavigationControlType.BMAP_NAVIGATION_CONTROL_LARGE] = "BMAP_NAVIGATION_CONTROL_LARGE";
NavigationControlType[NavigationControlType.BMAP_NAVIGATION_CONTROL_SMALL] = "BMAP_NAVIGATION_CONTROL_SMALL";
NavigationControlType[NavigationControlType.BMAP_NAVIGATION_CONTROL_PAN] = "BMAP_NAVIGATION_CONTROL_PAN";
NavigationControlType[NavigationControlType.BMAP_NAVIGATION_CONTROL_ZOOM] = "BMAP_NAVIGATION_CONTROL_ZOOM";
var MapTypeControlType = {
    BMAP_MAPTYPE_CONTROL_HORIZONTAL: 0,
    BMAP_MAPTYPE_CONTROL_DROPDOWN: 1,
    BMAP_MAPTYPE_CONTROL_MAP: 2,
};
MapTypeControlType[MapTypeControlType.BMAP_MAPTYPE_CONTROL_HORIZONTAL] = "BMAP_MAPTYPE_CONTROL_HORIZONTAL";
MapTypeControlType[MapTypeControlType.BMAP_MAPTYPE_CONTROL_DROPDOWN] = "BMAP_MAPTYPE_CONTROL_DROPDOWN";
MapTypeControlType[MapTypeControlType.BMAP_MAPTYPE_CONTROL_MAP] = "BMAP_MAPTYPE_CONTROL_MAP";
var LengthUnit = {
    BMAP_UNIT_METRIC: 'metric',
    BMAP_UNIT_IMPERIAL: 'us',
};
var BaiduMapModule = /** @class */ (function () {
    function BaiduMapModule() {
    }
    BaiduMapModule.forRoot = function (_config) {
        return {
            ngModule: BaiduMapModule,
            providers: [{ provide: ScriptLoaderConfig, useValue: _config }, ScriptLoader]
        };
    };
    return BaiduMapModule;
}());
BaiduMapModule.decorators = [
    { type: core.NgModule, args: [{
                declarations: [
                    MapComponent,
                    MarkerComponent,
                    ControlComponent,
                    PolylineComponent,
                    CircleComponent,
                    PolygonComponent,
                    HeatmapComponent,
                    TileLayderComponent,
                    TrafficLayderComponent,
                    MarkerClustererComponent
                ],
                exports: [
                    MapComponent,
                    MarkerComponent,
                    ControlComponent,
                    PolylineComponent,
                    CircleComponent,
                    PolygonComponent,
                    HeatmapComponent,
                    TileLayderComponent,
                    TrafficLayderComponent,
                    MarkerClustererComponent
                ]
            },] },
];

exports.BaiduMapModule = BaiduMapModule;
exports.MapTypeEnum = MapTypeEnum;
exports.ControlAnchor = ControlAnchor;
exports.LengthUnit = LengthUnit;
exports.NavigationControlType = NavigationControlType;
exports.MapTypeControlType = MapTypeControlType;
exports.ɵh = CircleComponent;
exports.ɵf = ControlComponent;
exports.ɵj = HeatmapComponent;
exports.ɵa = MapComponent;
exports.ɵe = MarkerComponent;
exports.ɵm = MarkerClustererComponent;
exports.ɵi = PolygonComponent;
exports.ɵg = PolylineComponent;
exports.ɵk = TileLayderComponent;
exports.ɵl = TrafficLayderComponent;
exports.ɵb = MapService;
exports.ɵd = ScriptLoader;
exports.ɵc = ScriptLoaderConfig;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=angular2-baidu-map.umd.js.map
