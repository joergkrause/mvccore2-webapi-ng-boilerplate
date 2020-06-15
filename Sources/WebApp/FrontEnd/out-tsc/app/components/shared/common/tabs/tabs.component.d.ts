import { BaseComponent, LifeCycle } from '@nyaf/lib';
export declare class TabsComponent extends BaseComponent<{}> {
    private tabChildren;
    constructor();
    render(): Promise<any>;
    lifeCycle(lc: LifeCycle): void;
    private selectTab;
    setTab(id: string): Promise<void>;
    private openTab;
}
