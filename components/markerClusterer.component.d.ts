import { OnChanges, OnDestroy, OnInit, SimpleChange } from '@angular/core';
import { MapService } from '../providers/mapService';
import { ScriptLoader } from '../providers/scriptLoader';
export declare class MarkerClustererComponent implements OnInit, OnChanges, OnDestroy {
    private _service;
    private scriptLoader;
    private options;
    private loaded;
    private markerClusterer;
    constructor(_service: MapService, scriptLoader: ScriptLoader);
    ngOnInit(): void;
    ngOnChanges(changes: {
        [propertyName: string]: SimpleChange;
    }): void;
    private resetOptions(options);
    ngOnDestroy(): void;
}
