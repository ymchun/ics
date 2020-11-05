import { VCalendar } from '~/components/v-calendar';
import { PARAMETER, PROPERTY, VALUE_DATA_TYPE } from '~/constant';
import { foldLine, getTimezoneOffset, propertyParameterToString } from '~/helper';
import { PropertyImpl } from '~/interfaces/impl';
import { Property } from '~/properties/property';
import { DateValue } from '~/values/date';
import { DateTimeValue } from '~/values/date-time';
import { TextValue } from '~/values/text';

export class DateTimeStart extends Property implements PropertyImpl<DateValue | DateTimeValue> {
	public type = PROPERTY.DTStart;
	public value!: DateValue | DateTimeValue;
	public parameters = {
		TZID: null as TextValue | null,
		Value: null as TextValue | null,
	};

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	public evaluate(calendar: VCalendar): void {
		// set parameters
		if (this.token.parameters) {
			this.token.parameters.map((param) => {
				this.setParameter(param.name, param.value);
			});
		}
		// get timezone
		const tz = getTimezoneOffset(calendar, this.parameters.TZID?.getValue() || null);
		// set value
		if (this.parameters.Value?.getValue() === VALUE_DATA_TYPE.Date) {
			this.value = new DateValue().setValue(this.token.value).convertFromTZ(tz);
		} else {
			this.value = new DateTimeValue().setValue(this.token.value).convertFromTZ(tz);
		}
	}

	public setParameter(type: string, value: string): void {
		switch (type) {
			case PARAMETER.TZID:
				this.parameters.TZID = new TextValue().setValue(value);
				break;
			case PARAMETER.Value:
				this.parameters.Value = new TextValue().setValue(value);
				break;
		}
	}

	public toString(): string {
		const paramStr = propertyParameterToString(this.parameters);
		return foldLine(`${this.type}${paramStr}:${this.value.toString()}`);
	}
}
