import { OnDestroy, OnInit } from '@angular/core';
import { MapService } from '../providers/mapService';
export declare class TrafficLayderComponent implements OnInit, OnDestroy {
    private _service;
    private options;
    private loaded;
    private trafficlayer;
    constructor(_service: MapService);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
