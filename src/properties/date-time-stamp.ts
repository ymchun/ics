import { PROPERTY } from '~/constant';
import { foldLine } from '~/helper';
import { PropertyImpl } from '~/interfaces/impl';
import { Property } from '~/properties/property';
import { DateTimeValue } from '~/values/date-time';

export class DateTimeStamp extends Property implements PropertyImpl<DateTimeValue> {
	public type = PROPERTY.DTStamp;
	public value!: DateTimeValue;

	public setValue(value: string): this {
		// set value
		this.value = new DateTimeValue().setValue(value);
		return this;
	}

	public toString(): string {
		return foldLine(`${this.type}:${this.value.toString()}`);
	}
}
