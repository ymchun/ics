import { VCalendar } from '~/components/v-calendar';
import { PARAMETER, PROPERTY, VALUE_DATA_TYPE } from '~/constant';
import { foldLine, propertyParameterToString } from '~/helper';
import { PropertyImpl } from '~/interfaces/property-impl';
import { Property } from '~/properties/property';
import { DateValue } from '~/values/date';
import { DateTime } from '~/values/date-time';
import { Text } from '~/values/text';

export class ExceptionDateTimes extends Property implements PropertyImpl<Array<DateValue | DateTime>> {
	public type = PROPERTY.ExDate;
	public value!: Array<DateValue | DateTime>;
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
			if (this.parameters.Value?.getValue() === VALUE_DATA_TYPE.Date) {
				return new DateValue().setValue(v);
			} else {
				return new DateTime().setValue(v);
			}
		});
		// this.value = this.token.value
		// 	.split(',')
		// 	.map((v) => zonedTimeToUtc(v, getTimezoneOffset(calendar, this.parameters.TZID)));
	}

	public toString(): string {
		const paramStr = propertyParameterToString(this.parameters);
		return foldLine(`${this.type}${paramStr}:${this.value.map((v) => v.toString()).join(',')}`);
	}
}
