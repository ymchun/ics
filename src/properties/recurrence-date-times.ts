import { VCalendar } from '~/components/v-calendar';
import { PARAMETER, PROPERTY, VALUE_DATA_TYPE } from '~/constant';
import { foldLine, propertyParameterToString } from '~/helper';
import { PropertyImpl } from '~/interfaces/property-impl';
import { Property } from '~/properties/property';
import { DateValue } from '~/values/date';
import { DateTimeValue } from '~/values/date-time';
import { PeriodValue } from '~/values/period';
import { TextValue } from '~/values/text';

export class RecurrenceDateTimes
	extends Property
	implements PropertyImpl<Array<DateValue | DateTimeValue | PeriodValue>> {
	public type = PROPERTY.RDate;
	public value!: Array<DateValue | DateTimeValue | PeriodValue>;
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
		this.value = this.token.value.split(',').map((v) => {
			switch (this.parameters.Value?.getValue()) {
				case VALUE_DATA_TYPE.Date:
					return new DateValue().setValue(v);
				case VALUE_DATA_TYPE.Period:
					return new PeriodValue().setValue(v);
				default:
					return new DateTimeValue().setValue(v);
			}
			// if (this.parameters.Value === VALUE_DATA_TYPE.PeriodValue) {
			// 	return getDateRangeFromPeriodValue(v);
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
