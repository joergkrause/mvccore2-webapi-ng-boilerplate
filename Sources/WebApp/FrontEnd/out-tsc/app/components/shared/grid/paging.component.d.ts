import { BaseComponent } from '@nyaf/lib';
export interface PagingProps {
    mode: 'full' | 'narrow';
    model?: [];
    pagesize: number;
    current: number;
}
export declare class PagingComponent extends BaseComponent<PagingProps> {
    constructor();
    invokeStep(page: number, pageSize: number): void;
    render(): any;
    jump(e: Event): Promise<void>;
}
