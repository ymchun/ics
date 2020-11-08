export interface KeyMap<T> {
	[key: string]: T;
}

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Constructible<T = any> {
	new (...args: any[]): T;
}
