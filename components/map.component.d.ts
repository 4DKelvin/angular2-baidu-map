import { OnChanges, OnInit, SimpleChange } from '@angular/core';
import { MapService } from '../providers/mapService';
export declare class MapComponent implements OnInit, OnChanges {
    private _service;
    private options;
    private loaded;
    private clicked;
    private mapInstance;
    constructor(_service: MapService);
    ngOnInit(): void;
    ngOnChanges(changes: {
        [propertyName: string]: SimpleChange;
    }): void;
    ngOnDestroy(): void;
    private addListener(map);
}
