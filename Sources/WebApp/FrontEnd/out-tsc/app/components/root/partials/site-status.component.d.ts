import { BaseComponent } from "@nyaf/lib";
interface StatusProperties {
    loggedIn: boolean;
}
export declare class SiteStatusComponent extends BaseComponent<StatusProperties> {
    constructor();
    render(): Promise<any>;
}
export {};
