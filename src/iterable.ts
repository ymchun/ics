export class Iterable<T> {
	private counter = 0;
	public constructor(private list: T[]) {}

	public next(): IteratorResult<T, T> {
		const item = this.list[this.counter];
		this.counter++;
		return {
			done: this.counter > this.list.length,
			value: item,
		};
	}

	[Symbol.iterator](): this {
		return this;
	}
}
