import { BaseComponent } from '@nyaf/lib';
export interface AlertProps {
    text: string;
    type?: string;
    close?: boolean;
    hide?: boolean;
}
export declare class AlertComponent extends BaseComponent<AlertProps> {
    constructor();
    render(): Promise<any>;
    get alertType(): string;
    close(e: Event): void;
}
