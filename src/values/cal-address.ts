import { VALUE_DATA_TYPE } from '~/constant';
import { Value } from '~/values/value';

export class CalAddressValue extends Value<string> {
	public type = VALUE_DATA_TYPE.CalAddress;
	private value!: string;

	public getValue(): string {
		return this.value;
	}

	public setValue(value: string): this {
		this.value = value.replace('mailto:', '');
		return this;
	}

	public toString(): string {
		return `mailto:${this.value}`;
	}
}
