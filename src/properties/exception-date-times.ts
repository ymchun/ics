import { VCalendar } from '~/components/v-calendar';
import { PARAMETER, PROPERTY, VALUE_DATA_TYPE } from '~/constant';
import { foldLine, getTimezoneOffset, propertyParameterToString } from '~/helper';
import { PropertyImpl } from '~/interfaces/property-impl';
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
		// get timezone
		const tz = getTimezoneOffset(calendar, this.parameters.TZID?.getValue() || null);
		// set value
		this.value = this.token.value.split(',').map((v) => {
			if (this.parameters.Value?.getValue() === VALUE_DATA_TYPE.Date) {
				return new DateValue().setValue(v).convertFromTZ(tz);
			} else {
				return new DateTimeValue().setValue(v).convertFromTZ(tz);
			}
		});
	}

	public toString(): string {
		const paramStr = propertyParameterToString(this.parameters);
		return foldLine(`${this.type}${paramStr}:${this.value.map((v) => v.toString()).join(',')}`);
	}
}
