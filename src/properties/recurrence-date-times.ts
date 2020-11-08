import { PARAMETER, PROPERTY, VALUE_DATA_TYPE } from '~/constant';
import { foldLine, propertyParameterToString } from '~/helper';
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

	public setValue(value: string): this {
		// set value
		this.value = value.split(',').map((v) => {
			switch (this.parameters.Value?.getValue()) {
				case VALUE_DATA_TYPE.Period:
					return new PeriodValue().setValue(v);
				case VALUE_DATA_TYPE.Date:
					return new DateValue().setValue(v);
				default:
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
		const valueStr = this.value.map((v) => v.toString()).join(',');
		return foldLine(`${this.type}${paramStr}:${valueStr}`);
	}
}
