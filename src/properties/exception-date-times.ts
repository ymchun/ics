import { PARAMETER, PROPERTY, VALUE_DATA_TYPE } from '~/constant';
import { foldLine } from '~/helper';
import { PropertyImpl } from '~/interfaces/impl';
import { propertyParameterToString } from '~/internal-helper';
import { Property } from '~/properties/property';
import { DateValue } from '~/values/date';
import { DateTimeValue } from '~/values/date-time';
import { TextValue } from '~/values/text';

export class ExceptionDateTimes extends Property implements PropertyImpl<Array<DateValue | DateTimeValue>> {
	public type = PROPERTY.ExDate;
	public value!: Array<DateValue | DateTimeValue>;
	public parameters = {
		TZID: null as TextValue | null,
		Value: null as TextValue | null,
	};

	public setValue(value: string): this {
		// set value
		this.value = value.split(',').map((v) => {
			if (this.parameters.Value?.getValue() === VALUE_DATA_TYPE.Date) {
				return new DateValue().setValue(v);
			} else {
				return new DateTimeValue().setValue(v);
			}
		});
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
		return foldLine(`${this.type}${paramStr}:${this.value.map((v) => v.toString()).join(',')}`);
	}
}
