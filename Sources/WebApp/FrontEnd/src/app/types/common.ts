export type ServiceType<T> = new (...args: any[]) => T;

export type Type<T> = new (...args: any[]) => T;

export type ComponentType<T extends HTMLElement> = new (...args: any[]) => T;

export interface Component extends ComponentType<HTMLElement> {
	readonly selector?: string;
}
