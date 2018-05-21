import { ModuleWithProviders } from '@angular/core';
import { LOADING_STATE, ScriptLoaderConfig } from './providers/scriptLoader';
import { BMap } from './types/BMap';
import { BMapLib } from './types/BMapLib';
export declare class BaiduMapModule {
    static forRoot(_config?: ScriptLoaderConfig): ModuleWithProviders;
}
export { BMapInstance, MapOptions, MapTypeEnum } from './types/Map';
export { BMapType } from './types/MapType';
export { BProjection } from './types/Projection';
export { Point } from './types/Point';
export { BMarker, Marker, MarkerOptions } from './types/Marker';
export { BPolyline, PolylineOptions } from './types/Polyline';
export { BCircle, CircleOptions } from './types/Circle';
export { BPolygon, PolygonOptions } from './types/Polygon';
export { BHeatmap, HeatmapOptions, HeatmapData } from './types/Heatmap';
export { BTileLayer, TileLayerOptions, getTilesUrlFunc } from './types/TileLayer';
export { BTrafficLayer, TrafficLayerOptions, PredictDate } from './types/TrafficLayer';
export { BMarkerClusterer, MarkerClustererOptions } from './types/MarkerClusterer';
export { TextIconStyle } from './types/TextIconOverlay';
export { BControl, BNavigationControl, BOverviewMapControl, BScaleControl, BMapTypeControl, BGeolocationControl, BPanoramaControlControl, ControlType, ControlAnchor, GeolocationControlOptions, LengthUnit, NavigationControlOptions, NavigationControlType, OverviewMapControlOptions, ScaleControlOptions, MapTypeControlOptions, MapTypeControlType } from './types/Control';
export { BInfoWindowConstructor, BInfoWindowOptions } from './types/InfoWindow';
declare global  {
    interface Window {
        _scriptLoadState: {
            [url: string]: LOADING_STATE;
        };
        _loadingCallbacks: {
            [url: string]: Array<() => void>;
        };
        BMap: BMap;
        BMapLib: BMapLib;
        baidumapinit: () => void;
        BMAP_PERSPECTIVE_MAP: any;
    }
}
