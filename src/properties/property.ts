/* eslint-disable @typescript-eslint/no-unused-vars */

export class Property {
	public type!: string;

	public setParameter(type: string, value: string): this {
		throw Error('Not implemented');
	}

	public setValue(value: string): this {
		throw Error('Not implemented');
	}

	public toString(): string {
		throw Error('Not implemented');
	}
}
