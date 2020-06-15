import { BaseComponent } from '@nyaf/lib';
export interface AlertProps {
    text: string;
    type?: string;
    close?: boolean;
}
export declare class AlertComponent extends BaseComponent<AlertProps> {
    constructor();
    render(): Promise<any>;
    get alertType(): string;
    close(e: Event): void;
    show(text?: any): void;
    hide(): void;
}
