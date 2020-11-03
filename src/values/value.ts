export class Value<T> {
	public type!: string;

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	public setValue(value: string): this {
		throw Error('Not implemented');
	}

	public getValue(): T {
		throw Error('Not implemented');
	}

	public toString(): string {
		throw Error('Not implemented');
	}
}
