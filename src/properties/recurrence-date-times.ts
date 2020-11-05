import { VCalendar } from '~/components/v-calendar';
import { PARAMETER, PROPERTY, VALUE_DATA_TYPE } from '~/constant';
import { foldLine, getTimezoneOffset, propertyParameterToString } from '~/helper';
import { PropertyImpl } from '~/interfaces/impl';
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
				this.setParameter(param.name, param.value);
			});
		}
		// get timezone
		const tz = getTimezoneOffset(calendar, this.parameters.TZID?.getValue() || null);
		// set value
		this.value = this.token.value.split(',').map((v) => {
			switch (this.parameters.Value?.getValue()) {
				case VALUE_DATA_TYPE.Period:
					return new PeriodValue().setValue(v);
				case VALUE_DATA_TYPE.Date:
					return new DateValue().setValue(v).convertFromTZ(tz);
				default:
					return new DateTimeValue().setValue(v).convertFromTZ(tz);
			}
		});
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
		const valueStr = this.value.map((v) => v.toString()).join(',');
		return foldLine(`${this.type}${paramStr}:${valueStr}`);
	}
}
