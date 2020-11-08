import { PROPERTY } from '~/constant';
import { foldLine } from '~/helper';
import { PropertyImpl } from '~/interfaces/impl';
import { Property } from '~/properties/property';
import { RecurrenceValue } from '~/values/recurrence';

export class RRule extends Property implements PropertyImpl<RecurrenceValue> {
	public type = PROPERTY.RRule;
	public value!: RecurrenceValue;

	public setValue(value: string): this {
		// set value
		this.value = new RecurrenceValue().setValue(value);
		return this;
	}

	public toString(): string {
		return foldLine(`${this.type}:${this.value.toString()}`);
	}
}
