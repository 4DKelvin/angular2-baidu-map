import { BGeolocationControlOptions, BMapTypeControlOptions, BNavigationControlOptions, BOverviewMapControlOptions, BScaleControlOptions, GeolocationControlOptions, MapTypeControlOptions, NavigationControlOptions, OverviewMapControlOptions, ScaleControlOptions } from '../types/Control';
import { BIcon, IconOptions } from '../types/Icon';
import { BMarkerOptions, MarkerOptions } from '../types/Marker';
import { BPoint, Point } from '../types/Point';
import { BSize, Size } from '../types/Size';
import { BMarkerClustererOptions, MarkerClustererOptions } from '../types/MarkerClusterer';
import { TextIconStyle, BTextIconStyle } from '../types/TextIconOverlay';
export declare function toPoint(opts: Point): BPoint;
export declare function toPoints(opts: Array<Point>): Array<BPoint>;
export declare function toSize(opts: Size): BSize;
export declare function toIcon(url: string, size: Size, options: IconOptions): BIcon;
export declare function toMarkerOptions(options: MarkerOptions): BMarkerOptions;
export declare function toNavigationControlOptions(options: NavigationControlOptions): BNavigationControlOptions;
export declare function toOverviewMapControlOptions(options: OverviewMapControlOptions): BOverviewMapControlOptions;
export declare function toScaleControlOptions(options: ScaleControlOptions): BScaleControlOptions;
export declare function toMapTypeControlOptions(options: MapTypeControlOptions): BMapTypeControlOptions;
export declare function toGeolocationOptions(options: GeolocationControlOptions): BGeolocationControlOptions;
export declare function toTextIconStyle(style: TextIconStyle): BTextIconStyle;
export declare function toMarkerClustererOptions(options: MarkerClustererOptions): BMarkerClustererOptions;
