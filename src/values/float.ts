import { VALUE_DATA_TYPE } from '~/constant';
import { Value } from '~/values/value';

export class FloatValue extends Value<number> {
	public type = VALUE_DATA_TYPE.Float;
	private value!: number;

	public getValue(): number {
		return this.value;
	}

	public setValue(value: string): this {
		this.value = parseFloat(value);
		return this;
	}

	public toString(): string {
		return `${this.value}`;
	}
}
