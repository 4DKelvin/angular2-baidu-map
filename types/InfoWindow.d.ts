import { BSize } from './Size';
export interface BInfoWindowConstructor {
    new (content: string | HTMLElement, opts?: BInfoWindowOptions): any;
}
export interface BInfoWindowOptions {
    width?: number;
    height?: number;
    maxWidth?: number;
    offset?: BSize;
    title?: string;
    enableAutoPan?: boolean;
    enableCloseOnClick?: boolean;
    enableMessage?: boolean;
    message?: string;
}
