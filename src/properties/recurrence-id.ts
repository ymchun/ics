import { VCalendar } from '~/components/v-calendar';
import { PARAMETER, PROPERTY, VALUE_DATA_TYPE } from '~/constant';
import { foldLine, propertyParameterToString } from '~/helper';
import { PropertyImpl } from '~/interfaces/property-impl';
import { Property } from '~/properties/property';
import { DateValue } from '~/values/date';
import { DateTime } from '~/values/date-time';
import { Text } from '~/values/text';

export class RecurrenceId extends Property implements PropertyImpl<DateValue | DateTime> {
	public type = PROPERTY.RecurrenceId;
	public value!: DateValue | DateTime;
	public parameters = {
		Range: null as Text | null,
		TZID: null as Text | null,
		Value: null as Text | null,
	};

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	public evaluate(calendar: VCalendar): void {
		// set parameters
		if (this.token.parameters) {
			this.token.parameters.map((param) => {
				switch (param.name) {
					case PARAMETER.Range:
						this.parameters.Range = new Text().setValue(param.value);
						break;
					case PARAMETER.TZID:
						this.parameters.TZID = new Text().setValue(param.value);
						break;
					case PARAMETER.Value:
						this.parameters.Value = new Text().setValue(param.value);
						break;
				}
			});
		}
		// set value
		if (this.parameters.Value?.getValue() === VALUE_DATA_TYPE.Date) {
			this.value = new DateValue().setValue(this.token.value);
		} else {
			this.value = new DateTime().setValue(this.token.value);
		}
		// this.value = zonedTimeToUtc(this.token.value, getTimezoneOffset(calendar, this.parameters.TZID));
	}

	public toString(): string {
		const paramStr = propertyParameterToString(this.parameters);
		return foldLine(`${this.type}${paramStr}:${this.value.toString()}`);
	}
}
