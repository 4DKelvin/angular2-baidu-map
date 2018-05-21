import { OnDestroy, OnInit } from '@angular/core';
import { MapService } from '../providers/mapService';
export declare class TileLayderComponent implements OnInit, OnDestroy {
    private _service;
    private getTilesUrl;
    private options;
    private loaded;
    private tilelayer;
    constructor(_service: MapService);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
