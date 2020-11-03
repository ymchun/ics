import { VALUE_DATA_TYPE } from '~/constant';
import { Value } from '~/values/value';

export class Integer extends Value<number> {
	public type = VALUE_DATA_TYPE.Integer;
	private value!: number;

	public getValue(): number {
		return this.value;
	}

	public setValue(value: string): this {
		this.value = parseInt(value, 10);
		return this;
	}

	public toString(): string {
		return `${this.value}`;
	}
}
