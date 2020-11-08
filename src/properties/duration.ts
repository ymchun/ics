import { PROPERTY } from '~/constant';
import { foldLine } from '~/helper';
import { PropertyImpl } from '~/interfaces/impl';
import { Property } from '~/properties/property';
import { DurationValue } from '~/values/duration';

export class Duration extends Property implements PropertyImpl<DurationValue> {
	public type = PROPERTY.Duration;
	public value!: DurationValue;

	public setValue(value: string): this {
		// set value
		this.value = new DurationValue().setValue(value);
		return this;
	}

	public toString(): string {
		return foldLine(`${this.type}:${this.value.toString()}`);
	}
}
