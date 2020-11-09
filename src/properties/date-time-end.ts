import { PARAMETER, PROPERTY, VALUE_DATA_TYPE } from '~/constant';
import { foldLine } from '~/helper';
import { PropertyImpl } from '~/interfaces/impl';
import { propertyParameterToString } from '~/internal-helper';
import { Property } from '~/properties/property';
import { DateValue } from '~/values/date';
import { DateTimeValue } from '~/values/date-time';
import { TextValue } from '~/values/text';

export class DateTimeEnd extends Property implements PropertyImpl<DateValue | DateTimeValue> {
	public type = PROPERTY.DTEnd;
	public value!: DateValue | DateTimeValue;
	public parameters = {
		TZID: null as TextValue | null,
		Value: null as TextValue | null,
	};

	public setValue(value: string): this {
		// set value
		if (this.parameters.Value?.getValue() === VALUE_DATA_TYPE.Date) {
			this.value = new DateValue().setValue(value);
		} else {
			this.value = new DateTimeValue().setValue(value);
		}
		return this;
	}

	public setParameter(type: string, value: string): this {
		switch (type) {
			case PARAMETER.TZID:
				this.parameters.TZID = new TextValue().setValue(value);
				break;
			case PARAMETER.Value:
				this.parameters.Value = new TextValue().setValue(value);
				break;
		}
		return this;
	}

	public toString(): string {
		const paramStr = propertyParameterToString(this.parameters);
		return foldLine(`${this.type}${paramStr}:${this.value.toString()}`);
	}
}
