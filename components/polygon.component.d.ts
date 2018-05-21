import { OnChanges, OnDestroy, OnInit, SimpleChange } from '@angular/core';
import { MapService } from '../providers/mapService';
export declare class PolygonComponent implements OnInit, OnChanges, OnDestroy {
    private _service;
    private points;
    private options;
    private loaded;
    private polygon;
    constructor(_service: MapService);
    ngOnInit(): void;
    ngOnChanges(changes: {
        [propertyName: string]: SimpleChange;
    }): void;
    ngOnDestroy(): void;
    private setOptions(options);
}
