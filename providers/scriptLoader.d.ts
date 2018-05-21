import { ScriptType } from '../types/Script';
export declare enum LOADING_STATE {
    NON = 0,
    LOADED = 1,
    LOADING = 2,
}
export declare class ScriptLoaderConfig {
    ak: string;
}
export declare class ScriptLoader {
    load(url: string | ScriptType, isMain: boolean, cb: () => void): void;
}
