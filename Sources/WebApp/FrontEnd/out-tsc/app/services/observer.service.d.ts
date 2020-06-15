declare type func = (v: string | number | symbol | any) => void;
/**
 * Implement a simple pub/sub pattern to have components communication without attributes.
 * This class is Singleton, use getInstance to get the global obj.
 */
export declare class Observer {
    private topics;
    private hOP;
    static Id: Readonly<string>;
    constructor(s: any);
    private static _instance;
    static getInstance(): Observer;
    subscribe(topic: string, listener: func): {
        remove: () => void;
    };
    publish(topic: string, info: any): void;
}
export {};
