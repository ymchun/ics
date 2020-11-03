import { VALUE_DATA_TYPE } from '~/constant';
import { Value } from '~/values/value';

export class Boolean extends Value<boolean> {
	public type = VALUE_DATA_TYPE.Boolean;
	private value!: boolean;

	public getValue(): boolean {
		return this.value;
	}

	public setValue(value: string): this {
		this.value = value.toLowerCase() === 'true';
		return this;
	}

	public toString(): string {
		return this.value ? 'TRUE' : 'FALSE';
	}
}
