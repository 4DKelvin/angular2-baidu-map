import { Injectable, Inject, Directive, EventEmitter, Input, Output, Component, ViewChild, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} obj
 * @return {?}
 */
function isNull(obj) {
    return obj === null || obj === undefined;
}
/**
 * @param {?} obj
 * @return {?}
 */
function isUndefined(obj) {
    return obj === undefined;
}
/**
 * @param {?} obj
 * @return {?}
 */
function isBoolean(obj) {
    return Object.prototype.toString.call(obj) === '[object Boolean]';
}
/**
 * @param {?} obj
 * @return {?}
 */
function isFunction(obj) {
    return Object.prototype.toString.call(obj) === '[object Function]';
}
/**
 * @param {?} obj
 * @return {?}
 */
function isString(obj) {
    return Object.prototype.toString.call(obj) === '[object String]';
}
/**
 * @template T
 * @param {?} obj
 * @param {...?} keys
 * @return {?}
 */
function omit(obj, ...keys) {
    const /** @type {?} */ rawKeys = Object.keys(obj);
    const /** @type {?} */ finalKeys = rawKeys.filter(k => keys.indexOf(k) < 0);
    return finalKeys.reduce((p, v) => {
        p[v] = obj[v];
        return p;
    }, /** @type {?} */ ({}));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} opts
 * @return {?}
 */
function toPoint(opts) {
    if (!opts) {
        return new window.BMap.Point();
    }
    return new window.BMap.Point(opts.lng, opts.lat);
}
/**
 * @param {?} opts
 * @return {?}
 */
function toPoints(opts) {
    if (!opts) {
        return [];
    }
    return opts.map(p => {
        return new window.BMap.Point(p.lng, p.lat);
    });
}
/**
 * @param {?} opts
 * @return {?}
 */
function toSize(opts) {
    if (!opts) {
        return new window.BMap.Size();
    }
    return new window.BMap.Size(opts.width, opts.height);
}
/**
 * @param {?} url
 * @param {?} size
 * @param {?} options
 * @return {?}
 */
function toIcon(url, size, options) {
    if (!size && !options) {
        return new window.BMap.Icon(url);
    }
    if (!size) {
        return new window.BMap.Icon(url, toSize(size));
    }
    const /** @type {?} */ iconOptions = {
        anchor: toSize(options.anchor),
        imageOffset: toSize(options.imageOffset),
        infoWindowAnchor: toSize(options.infoWindowAnchor),
        printImageUrl: options.printImageUrl
    };
    const /** @type {?} */ icon = new window.BMap.Icon(url, toSize(size), iconOptions);
    if (options.imageSize) {
        icon.setImageSize(toSize(options.imageSize));
    }
    return icon;
}
/**
 * @param {?} options
 * @return {?}
 */
function toMarkerOptions(options) {
    const /** @type {?} */ opts = {};
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
/**
 * @param {?} options
 * @return {?}
 */
function toNavigationControlOptions(options) {
    const /** @type {?} */ opts = {};
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
/**
 * @param {?} options
 * @return {?}
 */
function toOverviewMapControlOptions(options) {
    const /** @type {?} */ opts = {};
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
/**
 * @param {?} options
 * @return {?}
 */
function toScaleControlOptions(options) {
    const /** @type {?} */ opts = {};
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
/**
 * @param {?} options
 * @return {?}
 */
function toMapTypeControlOptions(options) {
    const /** @type {?} */ opts = {};
    if (!options) {
        return opts;
    }
    if (!isNull(options.type)) {
        opts.type = options.type;
    }
    return opts;
}
/**
 * @param {?} options
 * @return {?}
 */
function toGeolocationOptions(options) {
    const /** @type {?} */ opts = {};
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
/**
 * @param {?} style
 * @return {?}
 */
function toTextIconStyle(style) {
    const /** @type {?} */ realStyle = {
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
/**
 * @param {?} options
 * @return {?}
 */
function toMarkerClustererOptions(options) {
    const /** @type {?} */ opts = {};
    if (!options) {
        return opts;
    }
    if (options.markers) {
        opts.markers = options.markers.map(m => new window.BMap.Marker(toPoint(m.point), toMarkerOptions(m.options)));
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
        opts.styles = options.styles.filter(s => s).map(s => toTextIconStyle(s));
    }
    return opts;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} obj
 * @param {?} msg
 * @return {?}
 */
function nullCheck(obj, msg) {
    if (isNull(obj)) {
        throw new Error(msg);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {number} */
const LOADING_STATE = {
    NON: 0,
    LOADED: 1,
    LOADING: 2,
};
LOADING_STATE[LOADING_STATE.NON] = "NON";
LOADING_STATE[LOADING_STATE.LOADED] = "LOADED";
LOADING_STATE[LOADING_STATE.LOADING] = "LOADING";
class ScriptLoaderConfig {
    constructor() {
        this.ak = '';
    }
}
window._scriptLoadState = {};
window._loadingCallbacks = {};
class ScriptLoader {
    /**
     * @param {?} url
     * @param {?=} isMain
     * @param {?=} cb
     * @return {?}
     */
    load(url, isMain = false, cb) {
        const /** @type {?} */ scriptKey = isString(url) ? url : url['key'];
        const /** @type {?} */ scriptUrls = isString(url) ? [url] : url['scripts'];
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
            window.baidumapinit = () => {
                window._scriptLoadState[scriptKey] = LOADING_STATE.LOADED;
                switchDisplay('baidu-map .baidu-map-instance', 'block');
                switchDisplay('baidu-map .baidu-map-offline', 'none');
                window._loadingCallbacks[scriptKey].forEach((c) => {
                    c();
                });
            };
        }
        appendScriptsTag(scriptKey, scriptUrls, isMain);
    }
}
ScriptLoader.decorators = [
    { type: Injectable },
];
/**
 * @param {?} scriptKey
 * @param {?} urls
 * @param {?} isMain
 * @return {?}
 */
function appendScriptsTag(scriptKey, urls, isMain) {
    const /** @type {?} */ leftObj = {
        count: urls.length
    };
    urls.forEach(url => {
        appendScriptTag(scriptKey, url, isMain, leftObj);
    });
}
/**
 * @param {?} scriptKey
 * @param {?} url
 * @param {?} isMain
 * @param {?} leftObj
 * @return {?}
 */
function appendScriptTag(scriptKey, url, isMain, leftObj) {
    const /** @type {?} */ script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    script.onerror = () => {
        if (isMain) {
            switchDisplay('baidu-map .baidu-map-offline', 'block');
            switchDisplay('baidu-map .baidu-map-instance', 'none');
        }
        document.body.removeChild(script);
        setTimeout(() => {
            appendScriptTag(scriptKey, url, isMain, leftObj);
        }, 30000);
    };
    if (!isMain) {
        script.onload = () => {
            leftObj.count--;
            if (leftObj.count) {
                return;
            }
            window._scriptLoadState[scriptKey] = LOADING_STATE.LOADED;
            window._loadingCallbacks[scriptKey].forEach((c) => {
                c();
            });
        };
    }
    document.body.appendChild(script);
}
/**
 * @param {?} selector
 * @param {?} state
 * @return {?}
 */
function switchDisplay(selector, state) {
    Array.prototype.slice.call(document.querySelectorAll(selector)).forEach((node) => {
        node.style.display = state;
    });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/** @enum {string} */
const MapTypeEnum = {
    BMAP_NORMAL_MAP: 'BMAP_NORMAL_MAP',
    BMAP_PERSPECTIVE_MAP: 'BMAP_PERSPECTIVE_MAP',
    BMAP_SATELLITE_MAP: 'BMAP_SATELLITE_MAP',
    BMAP_HYBRID_MAP: 'BMAP_HYBRID_MAP',
};
/**
 * @param {?} maptype
 * @return {?}
 */
function isMapTypeEnum(maptype) {
    return !isFunction((/** @type {?} */ (maptype)).getTileLayer);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MapService {
    /**
     * @param {?} config
     * @param {?} _loader
     */
    constructor(config, _loader) {
        this._loader = _loader;
        nullCheck(config.ak, 'ak must be provided');
        this._config = config;
        this._map = new Promise((resolve) => {
            this._mapResolver = resolve;
        });
    }
    /**
     * @param {?} el
     * @param {?} mapOptions
     * @return {?}
     */
    createMap(el, mapOptions) {
        const /** @type {?} */ URL = `https://api.map.baidu.com/api?v=2.0&ak=${this._config.ak}&callback=baidumapinit&s=1`;
        return new Promise(resolve => {
            this._loader.load(URL, true, () => {
                const /** @type {?} */ map = new window.BMap.Map(el, omit(mapOptions, 'mapType'));
                this.setOptions(mapOptions);
                this._mapResolver(map);
                resolve(map);
            });
        });
    }
    /**
     * @param {?} opts
     * @return {?}
     */
    setOptions(opts) {
        const { disableDragging, enableScrollWheelZoom, disableDoubleClickZoom, enableKeyboard, enableInertialDragging, enableAutoResize, enableContinuousZoom, disablePinchToZoom } = opts;
        if (isBoolean(disableDragging)) {
            this._map.then(map => map[(disableDragging ? 'disable' : 'enable') + 'Dragging']());
        }
        if (isBoolean(enableScrollWheelZoom)) {
            this._map.then(map => map[(enableScrollWheelZoom ? 'enable' : 'disable') + 'ScrollWheelZoom']());
        }
        if (isBoolean(enableAutoResize)) {
            this._map.then(map => map[(enableAutoResize ? 'enable' : 'disable') + 'AutoResize']());
        }
        if (isBoolean(disableDoubleClickZoom)) {
            this._map.then(map => map[(disableDoubleClickZoom ? 'disable' : 'enable') + 'DoubleClickZoom']());
        }
        if (isBoolean(enableKeyboard)) {
            this._map.then(map => map[(enableKeyboard ? 'enable' : 'disable') + 'Keyboard']());
        }
        if (isBoolean(enableInertialDragging)) {
            this._map.then(map => map[(enableInertialDragging ? 'enable' : 'disable') + 'InertialDragging']());
        }
        if (isBoolean(enableContinuousZoom)) {
            this._map.then(map => map[(enableContinuousZoom ? 'enable' : 'disable') + 'ContinuousZoom']());
        }
        if (isBoolean(disablePinchToZoom)) {
            this._map.then(map => map[(disablePinchToZoom ? 'disable' : 'enable') + 'PinchToZoom']());
        }
        if (!isNull(opts.cursor)) {
            this._map.then(map => map.setDefaultCursor(opts.cursor));
        }
        if (!isNull(opts.draggingCursor)) {
            this._map.then(map => map.setDraggingCursor(opts.draggingCursor));
        }
        if (!isNull(opts.currentCity)) {
            this._map.then(map => map.setCurrentCity(opts.currentCity));
        }
        if (!isNull(opts.centerAndZoom)) {
            this._map.then(map => {
                map.centerAndZoom(toPoint(opts.centerAndZoom), opts.centerAndZoom.zoom);
            });
        }
        if (!isNull(opts.mapType)) {
            this._map.then(map => {
                const /** @type {?} */ realType = isMapTypeEnum(opts.mapType) ? window[opts.mapType] : opts.mapType;
                map.setMapType(realType);
            });
        }
    }
    /**
     * @param {?} cb
     * @return {?}
     */
    addOverlay(cb) {
        return this._map.then((map) => {
            const /** @type {?} */ overlay = cb(map);
            map.addOverlay(overlay);
            return { map, overlay };
        });
    }
    /**
     * @param {?} overlay
     * @return {?}
     */
    removeOverlay(overlay) {
        return this._map.then((map) => {
            map.removeOverlay(overlay);
        });
    }
    /**
     * @param {?} cb
     * @return {?}
     */
    addTileLayer(cb) {
        return this._map.then((map) => {
            const /** @type {?} */ tilelayer = cb(map);
            map.addTileLayer(tilelayer);
            return { map, tilelayer };
        });
    }
    /**
     * @param {?} tilelayer
     * @return {?}
     */
    removeTileLayer(tilelayer) {
        return this._map.then((map) => {
            map.removeOverlay(tilelayer);
        });
    }
    /**
     * @param {?} cb
     * @return {?}
     */
    addControl(cb) {
        return this._map.then((map) => {
            const /** @type {?} */ control = cb(map);
            map.addControl(control);
            return { map, control };
        });
    }
    /**
     * @param {?} control
     * @return {?}
     */
    removeControl(control) {
        return this._map.then((map) => {
            map.removeControl(control);
        });
    }
    /**
     * @return {?}
     */
    getNativeMap() {
        return this._map;
    }
}
MapService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
MapService.ctorParameters = () => [
    { type: ScriptLoaderConfig, decorators: [{ type: Inject, args: [ScriptLoaderConfig,] },] },
    { type: ScriptLoader, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ControlComponent {
    /**
     * @param {?} _service
     */
    constructor(_service) {
        this._service = _service;
        this.loaded = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        nullCheck(this.type, 'type is required for <control>');
        this._service
            .addControl(() => {
            this.control = this.createControl(this.type, this.options);
            return this.control;
        })
            .then(({ control }) => {
            this.loaded.emit(control);
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._service.removeControl(this.control);
    }
    /**
     * @param {?} type
     * @param {?} options
     * @return {?}
     */
    createControl(type, options) {
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
        throw new Error(`Unsupported type:${type} of control`);
    }
}
ControlComponent.decorators = [
    { type: Directive, args: [{
                selector: 'control'
            },] },
];
/** @nocollapse */
ControlComponent.ctorParameters = () => [
    { type: MapService, },
];
ControlComponent.propDecorators = {
    "type": [{ type: Input },],
    "options": [{ type: Input },],
    "loaded": [{ type: Output },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MapComponent {
    /**
     * @param {?} _service
     */
    constructor(_service) {
        this._service = _service;
        this.loaded = new EventEmitter();
        this.clicked = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        nullCheck(this.options, 'options is required for <baidu-map>');
        nullCheck(this.options.centerAndZoom, 'options.centerAndZoom is required for <baidu-map>');
        this._service
            .createMap(this.mapInstance.nativeElement, this.options)
            .then(map => {
            this.loaded.emit(map);
            return map;
        })
            .then(map => {
            this.addListener(map);
        });
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const /** @type {?} */ opts = /** @type {?} */ (changes["options"].currentValue);
        this._service.setOptions(opts);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        console.log('on map destroy');
    }
    /**
     * @param {?} map
     * @return {?}
     */
    addListener(map) {
        map.addEventListener('click', (e) => {
            this.clicked.emit(e);
        });
    }
}
MapComponent.decorators = [
    { type: Component, args: [{
                providers: [MapService],
                selector: 'baidu-map',
                styles: [
                    `
        .baidu-map-instance {
            width: 100%;
            height: 100%;
            display: none;
        }
        .baidu-map-offline {
            width: 100%;
            height: 100%;
            background-color: #E6E6E6;
            position: relative;
            display: none;
        }
        .baidu-map-offline label {
            fontSize: 30px;
            margin: 0;
            position: absolute;
            top: 50%;
            left: 50%;
            margin-right: -50%;
            transform: translate(-50%, -50%);
        }
        .tranclude-content {
            display: none;
        }
        `
                ],
                template: `
    <div #mapinstance class="baidu-map-instance"></div>
    <div class="baidu-map-offline">
        <label>{{ 'NO_NETWORK' }}</label>
    </div>
    <div class="tranclude-content">
        <ng-content></ng-content>
    </div>
    `
            },] },
];
/** @nocollapse */
MapComponent.ctorParameters = () => [
    { type: MapService, },
];
MapComponent.propDecorators = {
    "options": [{ type: Input },],
    "loaded": [{ type: Output },],
    "clicked": [{ type: Output },],
    "mapInstance": [{ type: ViewChild, args: ['mapinstance',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MarkerComponent {
    /**
     * @param {?} _service
     */
    constructor(_service) {
        this._service = _service;
        this.loaded = new EventEmitter();
        this.clicked = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        nullCheck(this.point, 'point is required for <marker>');
        this._service
            .addOverlay(() => {
            return (this.marker = new window.BMap.Marker(toPoint(this.point), toMarkerOptions(this.options)));
        })
            .then(({ map }) => {
            this.loaded.emit(this.marker);
            this.addListener(this.marker, map);
        })
            .then(() => {
            // workaround: it's weird that postion is set while constructing phase will make click event not working
            this.marker.setPosition(new window.BMap.Point(this.point.lng, this.point.lat));
        });
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes["point"] && !changes["point"].isFirstChange()) {
            this.marker.setPosition(toPoint(changes["point"].currentValue));
        }
        if (changes["options"] && !changes["options"].isFirstChange()) {
            this.setOptions(changes["options"].currentValue);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._service.removeOverlay(this.marker);
    }
    /**
     * @param {?} options
     * @return {?}
     */
    setOptions(options) {
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
    }
    /**
     * @param {?} marker
     * @param {?} map
     * @return {?}
     */
    addListener(marker, map) {
        marker.addEventListener('click', (e) => {
            this.clicked.emit({
                e,
                map,
                marker
            });
        });
    }
}
MarkerComponent.decorators = [
    { type: Directive, args: [{
                selector: 'marker'
            },] },
];
/** @nocollapse */
MarkerComponent.ctorParameters = () => [
    { type: MapService, },
];
MarkerComponent.propDecorators = {
    "point": [{ type: Input },],
    "options": [{ type: Input },],
    "loaded": [{ type: Output },],
    "clicked": [{ type: Output },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class PolylineComponent {
    /**
     * @param {?} _service
     */
    constructor(_service) {
        this._service = _service;
        this.loaded = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        nullCheck(this.points, 'points is required for <polyline>');
        this._service
            .addOverlay(() => {
            return (this.polyline = new window.BMap.Polyline(toPoints(this.points), this.options));
        })
            .then(() => {
            this.loaded.emit(this.polyline);
        });
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes["points"] && !changes["points"].isFirstChange()) {
            this.polyline.setPath(toPoints(changes["points"].currentValue));
        }
        if (changes["options"] && !changes["options"].isFirstChange()) {
            this.setOptions(changes["options"].currentValue);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._service.removeOverlay(this.polyline);
    }
    /**
     * @param {?} options
     * @return {?}
     */
    setOptions(options) {
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
    }
}
PolylineComponent.decorators = [
    { type: Directive, args: [{
                selector: 'polyline'
            },] },
];
/** @nocollapse */
PolylineComponent.ctorParameters = () => [
    { type: MapService, },
];
PolylineComponent.propDecorators = {
    "points": [{ type: Input },],
    "options": [{ type: Input },],
    "loaded": [{ type: Output },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class CircleComponent {
    /**
     * @param {?} _service
     */
    constructor(_service) {
        this._service = _service;
        this.loaded = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        nullCheck(this.center, 'center is required for <circle>');
        nullCheck(this.radius, 'center is required for <circle>');
        this._service
            .addOverlay(() => {
            return (this.circle = new window.BMap.Circle(toPoint(this.center), this.radius, this.options));
        })
            .then(() => {
            this.loaded.emit(this.circle);
        });
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes["center"] && !changes["center"].isFirstChange()) {
            this.circle.setCenter(toPoint(changes["center"].currentValue));
        }
        if (changes["radius"] && !changes["radius"].isFirstChange()) {
            this.circle.setRadius(changes["radius"].currentValue);
        }
        if (changes["options"] && !changes["options"].isFirstChange()) {
            this.setOptions(changes["options"].currentValue);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._service.removeOverlay(this.circle);
    }
    /**
     * @param {?} options
     * @return {?}
     */
    setOptions(options) {
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
    }
}
CircleComponent.decorators = [
    { type: Directive, args: [{
                selector: 'circle'
            },] },
];
/** @nocollapse */
CircleComponent.ctorParameters = () => [
    { type: MapService, },
];
CircleComponent.propDecorators = {
    "center": [{ type: Input },],
    "radius": [{ type: Input },],
    "options": [{ type: Input },],
    "loaded": [{ type: Output },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class PolygonComponent {
    /**
     * @param {?} _service
     */
    constructor(_service) {
        this._service = _service;
        this.loaded = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        nullCheck(this.points, 'points is required for <polygon>');
        this._service
            .addOverlay(() => {
            return (this.polygon = new window.BMap.Polygon(toPoints(this.points), this.options));
        })
            .then(() => {
            this.loaded.emit(this.polygon);
        });
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes["points"] && !changes["points"].isFirstChange()) {
            this.polygon.setPath(toPoints(changes["points"].currentValue));
        }
        if (changes["options"] && !changes["options"].isFirstChange()) {
            this.setOptions(changes["options"].currentValue);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._service.removeOverlay(this.polygon);
    }
    /**
     * @param {?} options
     * @return {?}
     */
    setOptions(options) {
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
    }
}
PolygonComponent.decorators = [
    { type: Directive, args: [{
                selector: 'polygon'
            },] },
];
/** @nocollapse */
PolygonComponent.ctorParameters = () => [
    { type: MapService, },
];
PolygonComponent.propDecorators = {
    "points": [{ type: Input },],
    "options": [{ type: Input },],
    "loaded": [{ type: Output },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const LIB_URL = `https://api.map.baidu.com/library/Heatmap/2.0/src/Heatmap_min.js`;
class HeatmapComponent {
    /**
     * @param {?} _service
     * @param {?} scriptLoader
     */
    constructor(_service, scriptLoader) {
        this._service = _service;
        this.scriptLoader = scriptLoader;
        this.loaded = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        nullCheck(this.dataset, 'dataset is required for <heatmap>');
        this._service.getNativeMap().then(() => {
            return this.scriptLoader.load(LIB_URL, false, () => {
                this._service
                    .addOverlay(() => {
                    return (this.heatmap = new window.BMapLib.HeatmapOverlay(this.options));
                })
                    .then(() => {
                    this.loaded.emit(this.heatmap);
                    if (this.dataset) {
                        this.heatmap.setDataSet(this.dataset);
                    }
                });
            });
        });
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes["dataset"] && !changes["dataset"].isFirstChange()) {
            this.heatmap.setDataSet(changes["dataset"].currentValue);
        }
        if (changes["options"] && !changes["options"].isFirstChange()) {
            this.heatmap.setOptions(changes["options"].currentValue);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._service.removeOverlay(this.heatmap);
    }
}
HeatmapComponent.decorators = [
    { type: Directive, args: [{
                selector: 'heatmap'
            },] },
];
/** @nocollapse */
HeatmapComponent.ctorParameters = () => [
    { type: MapService, },
    { type: ScriptLoader, },
];
HeatmapComponent.propDecorators = {
    "dataset": [{ type: Input },],
    "options": [{ type: Input },],
    "loaded": [{ type: Output },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TileLayderComponent {
    /**
     * @param {?} _service
     */
    constructor(_service) {
        this._service = _service;
        this.loaded = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        const /** @type {?} */ func = this.getTilesUrl;
        this._service
            .addTileLayer(() => {
            this.tilelayer = new window.BMap.TileLayer(this.options);
            if (this.getTilesUrl) {
                this.tilelayer.getTilesUrl = function (tileCoord, zoom) {
                    return func(tileCoord, zoom);
                };
            }
            return this.tilelayer;
        })
            .then(() => {
            this.loaded.emit(this.tilelayer);
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._service.removeTileLayer(this.tilelayer);
    }
}
TileLayderComponent.decorators = [
    { type: Directive, args: [{
                selector: 'tilelayer'
            },] },
];
/** @nocollapse */
TileLayderComponent.ctorParameters = () => [
    { type: MapService, },
];
TileLayderComponent.propDecorators = {
    "getTilesUrl": [{ type: Input },],
    "options": [{ type: Input },],
    "loaded": [{ type: Output },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TrafficLayderComponent {
    /**
     * @param {?} _service
     */
    constructor(_service) {
        this._service = _service;
        this.loaded = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._service
            .addTileLayer(() => {
            this.trafficlayer = new window.BMap.TrafficLayer(this.options);
            return this.trafficlayer;
        })
            .then(() => {
            this.loaded.emit(this.trafficlayer);
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._service.removeTileLayer(this.trafficlayer);
    }
}
TrafficLayderComponent.decorators = [
    { type: Directive, args: [{
                selector: 'trafficlayer'
            },] },
];
/** @nocollapse */
TrafficLayderComponent.ctorParameters = () => [
    { type: MapService, },
];
TrafficLayderComponent.propDecorators = {
    "options": [{ type: Input },],
    "loaded": [{ type: Output },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const LIB_URLS = {
    key: 'markerClusterer',
    scripts: [
        'https://api.map.baidu.com/library/MarkerClusterer/1.2/src/MarkerClusterer_min.js',
        'https://api.map.baidu.com/library/TextIconOverlay/1.2/src/TextIconOverlay_min.js'
    ]
};
class MarkerClustererComponent {
    /**
     * @param {?} _service
     * @param {?} scriptLoader
     */
    constructor(_service, scriptLoader) {
        this._service = _service;
        this.scriptLoader = scriptLoader;
        this.loaded = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        nullCheck(this.options, 'options is required for <marker-clusterer>');
        this._service.getNativeMap().then((map) => {
            return this.scriptLoader.load(LIB_URLS, false, () => {
                this.markerClusterer = new window.BMapLib.MarkerClusterer(map, toMarkerClustererOptions(this.options));
                this.loaded.emit(this.markerClusterer);
            });
        });
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes["options"] && !changes["options"].isFirstChange()) {
            this.resetOptions(changes["options"].currentValue);
        }
    }
    /**
     * @param {?} options
     * @return {?}
     */
    resetOptions(options) {
        if (options.markers) {
            this.markerClusterer.clearMarkers();
            this.markerClusterer.addMarkers(options.markers.map(m => new window.BMap.Marker(toPoint(m.point), toMarkerOptions(m.options))));
        }
        if (!isUndefined(options.girdSize)) {
            this.markerClusterer.setGridSize(options.girdSize);
        }
        if (!isUndefined(options.maxZoom)) {
            this.markerClusterer.setMaxZoom(options.maxZoom);
        }
        if (options.styles) {
            this.markerClusterer.setStyles(options.styles.filter(s => s).map(s => toTextIconStyle(s)));
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.markerClusterer.clearMarkers();
    }
}
MarkerClustererComponent.decorators = [
    { type: Directive, args: [{
                selector: 'marker-clusterer'
            },] },
];
/** @nocollapse */
MarkerClustererComponent.ctorParameters = () => [
    { type: MapService, },
    { type: ScriptLoader, },
];
MarkerClustererComponent.propDecorators = {
    "options": [{ type: Input },],
    "loaded": [{ type: Output },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/** @enum {number} */
const ControlAnchor = {
    BMAP_ANCHOR_TOP_LEFT: 0,
    BMAP_ANCHOR_TOP_RIGHT: 1,
    BMAP_ANCHOR_BOTTOM_LEFT: 2,
    BMAP_ANCHOR_BOTTOM_RIGHT: 3,
};
ControlAnchor[ControlAnchor.BMAP_ANCHOR_TOP_LEFT] = "BMAP_ANCHOR_TOP_LEFT";
ControlAnchor[ControlAnchor.BMAP_ANCHOR_TOP_RIGHT] = "BMAP_ANCHOR_TOP_RIGHT";
ControlAnchor[ControlAnchor.BMAP_ANCHOR_BOTTOM_LEFT] = "BMAP_ANCHOR_BOTTOM_LEFT";
ControlAnchor[ControlAnchor.BMAP_ANCHOR_BOTTOM_RIGHT] = "BMAP_ANCHOR_BOTTOM_RIGHT";
/** @enum {number} */
const NavigationControlType = {
    BMAP_NAVIGATION_CONTROL_LARGE: 0,
    BMAP_NAVIGATION_CONTROL_SMALL: 1,
    BMAP_NAVIGATION_CONTROL_PAN: 2,
    BMAP_NAVIGATION_CONTROL_ZOOM: 3,
};
NavigationControlType[NavigationControlType.BMAP_NAVIGATION_CONTROL_LARGE] = "BMAP_NAVIGATION_CONTROL_LARGE";
NavigationControlType[NavigationControlType.BMAP_NAVIGATION_CONTROL_SMALL] = "BMAP_NAVIGATION_CONTROL_SMALL";
NavigationControlType[NavigationControlType.BMAP_NAVIGATION_CONTROL_PAN] = "BMAP_NAVIGATION_CONTROL_PAN";
NavigationControlType[NavigationControlType.BMAP_NAVIGATION_CONTROL_ZOOM] = "BMAP_NAVIGATION_CONTROL_ZOOM";
/** @enum {number} */
const MapTypeControlType = {
    BMAP_MAPTYPE_CONTROL_HORIZONTAL: 0,
    BMAP_MAPTYPE_CONTROL_DROPDOWN: 1,
    BMAP_MAPTYPE_CONTROL_MAP: 2,
};
MapTypeControlType[MapTypeControlType.BMAP_MAPTYPE_CONTROL_HORIZONTAL] = "BMAP_MAPTYPE_CONTROL_HORIZONTAL";
MapTypeControlType[MapTypeControlType.BMAP_MAPTYPE_CONTROL_DROPDOWN] = "BMAP_MAPTYPE_CONTROL_DROPDOWN";
MapTypeControlType[MapTypeControlType.BMAP_MAPTYPE_CONTROL_MAP] = "BMAP_MAPTYPE_CONTROL_MAP";
/** @enum {string} */
const LengthUnit = {
    BMAP_UNIT_METRIC: 'metric',
    BMAP_UNIT_IMPERIAL: 'us',
};
/**
 * @record
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class BaiduMapModule {
    /**
     * @param {?=} _config
     * @return {?}
     */
    static forRoot(_config) {
        return {
            ngModule: BaiduMapModule,
            providers: [{ provide: ScriptLoaderConfig, useValue: _config }, ScriptLoader]
        };
    }
}
BaiduMapModule.decorators = [
    { type: NgModule, args: [{
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

export { BaiduMapModule, MapTypeEnum, ControlAnchor, LengthUnit, NavigationControlType, MapTypeControlType, CircleComponent as ɵh, ControlComponent as ɵf, HeatmapComponent as ɵj, MapComponent as ɵa, MarkerComponent as ɵe, MarkerClustererComponent as ɵm, PolygonComponent as ɵi, PolylineComponent as ɵg, TileLayderComponent as ɵk, TrafficLayderComponent as ɵl, MapService as ɵb, ScriptLoader as ɵd, ScriptLoaderConfig as ɵc };
//# sourceMappingURL=angular2-baidu-map.js.map
