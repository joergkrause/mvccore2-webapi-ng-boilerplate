import { BaseComponent } from '@nyaf/lib';
export declare class TabComponent extends BaseComponent<{}> {
    private _title;
    constructor();
    render(): Promise<any>;
    get title(): string;
    set title(value: string);
}
