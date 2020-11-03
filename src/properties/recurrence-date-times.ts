import { VCalendar } from '~/components/v-calendar';
import { PARAMETER, PROPERTY, VALUE_DATA_TYPE } from '~/constant';
import { foldLine, propertyParameterToString } from '~/helper';
import { PropertyImpl } from '~/interfaces/property-impl';
import { Property } from '~/properties/property';
import { DateValue } from '~/values/date';
import { DateTime } from '~/values/date-time';
import { Period } from '~/values/period';
import { Text } from '~/values/text';

export class RecurrenceDateTimes extends Property implements PropertyImpl<Array<DateValue | DateTime | Period>> {
	public type = PROPERTY.RDate;
	public value!: Array<DateValue | DateTime | Period>;
	public parameters = {
		TZID: null as Text | null,
		Value: null as Text | null,
	};

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	public evaluate(calendar: VCalendar): void {
		// set parameters
		if (this.token.parameters) {
			this.token.parameters.map((param) => {
				switch (param.name) {
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
		this.value = this.token.value.split(',').map((v) => {
			switch (this.parameters.Value?.getValue()) {
				case VALUE_DATA_TYPE.Date:
					return new DateValue().setValue(v);
				case VALUE_DATA_TYPE.Period:
					return new Period().setValue(v);
				default:
					return new DateTime().setValue(v);
			}
			// if (this.parameters.Value === VALUE_DATA_TYPE.Period) {
			// 	return getDateRangeFromPeriod(v);
			// } else {
			// 	const date = zonedTimeToUtc(v, getTimezoneOffset(calendar, this.parameters.TZID));
			// 	return [date, date];
			// }
		});
	}

	public toString(): string {
		const paramStr = propertyParameterToString(this.parameters);
		const valueStr = this.value.map((v) => v.toString()).join(',');
		return foldLine(`${this.type}${paramStr}:${valueStr}`);
	}
}
