import { VALUE_DATA_TYPE } from '~/constant';
import { Value } from '~/values/value';

export class URI extends Value<string> {
	public type = VALUE_DATA_TYPE.URI;
	private value!: string;

	public getValue(): string {
		return this.value;
	}

	public setValue(value: string): this {
		this.value = value;
		return this;
	}

	public toString(): string {
		return this.value;
	}
}
