import { VCalendar } from '~/components/v-calendar';
import { PARAMETER, PROPERTY, VALUE_DATA_TYPE } from '~/constant';
import { foldLine, propertyParameterToString } from '~/helper';
import { PropertyImpl } from '~/interfaces/property-impl';
import { Property } from '~/properties/property';
import { DateValue } from '~/values/date';
import { DateTimeValue } from '~/values/date-time';
import { TextValue } from '~/values/text';

export class DateTimeDue extends Property implements PropertyImpl<DateValue | DateTimeValue> {
	public type = PROPERTY.Due;
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
				switch (param.name) {
					case PARAMETER.TZID:
						this.parameters.TZID = new TextValue().setValue(param.value);
						break;
					case PARAMETER.Value:
						this.parameters.Value = new TextValue().setValue(param.value);
						break;
				}
			});
		}
		// set value
		if (this.parameters.Value?.getValue() === VALUE_DATA_TYPE.Date) {
			this.value = new DateValue().setValue(this.token.value);
		} else {
			this.value = new DateTimeValue().setValue(this.token.value);
		}
		// this.value = zonedTimeToUtc(this.token.value, getTimezoneOffset(calendar, this.parameters.TZID));
	}

	public toString(): string {
		const paramStr = propertyParameterToString(this.parameters);
		return foldLine(`${this.type}${paramStr}:${this.value.toString()}`);
	}
}
