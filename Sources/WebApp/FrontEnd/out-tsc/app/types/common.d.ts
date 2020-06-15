export declare type ServiceType<T> = new (...args: any[]) => T;
export declare type Type<T> = new (...args: any[]) => T;
export declare type ComponentType<T extends HTMLElement> = new (...args: any[]) => T;
export interface Component extends ComponentType<HTMLElement> {
    readonly selector?: string;
}
