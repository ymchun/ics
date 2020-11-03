import { VALUE_DATA_TYPE } from '~/constant';
import { escape, unescape } from '~/helper';
import { Value } from '~/values/value';

export class TextValue extends Value<string> {
	public type = VALUE_DATA_TYPE.Text;
	private value!: string;

	public getValue(): string {
		return this.value;
	}

	public setValue(value: string): this {
		this.value = unescape(value);
		return this;
	}

	public toString(): string {
		return escape(this.value);
	}
}
