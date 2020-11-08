import { PROPERTY } from '~/constant';
import { foldLine } from '~/helper';
import { PropertyImpl } from '~/interfaces/impl';
import { Property } from '~/properties/property';
import { IntegerValue } from '~/values/integer';

export class Sequence extends Property implements PropertyImpl<IntegerValue> {
	public type = PROPERTY.Sequence;
	public value!: IntegerValue;

	public setValue(value: string): this {
		// set value
		this.value = new IntegerValue().setValue(value);
		return this;
	}

	public toString(): string {
		return foldLine(`${this.type}:${this.value.toString()}`);
	}
}
