import { VCalendar } from '~/components/v-calendar';
import { PARAMETER, PROPERTY, TEST_PERIOD_TYPE } from '~/constant';
import { foldLine, propertyParameterToString } from '~/helper';
import { PropertyImpl } from '~/interfaces/impl';
import { Property } from '~/properties/property';
import { DateTimeValue } from '~/values/date-time';
import { DurationValue } from '~/values/duration';
import { TextValue } from '~/values/text';

export class Trigger extends Property implements PropertyImpl<DateTimeValue | DurationValue> {
	public type = PROPERTY.Trigger;
	public value!: DateTimeValue | DurationValue;
	public parameters = {
		Related: null as TextValue | null,
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
		// set value
		if (TEST_PERIOD_TYPE.test(this.token.value)) {
			this.value = new DurationValue().setValue(this.token.value);
		} else {
			this.value = new DateTimeValue().setValue(this.token.value);
		}
	}

	public setParameter(type: string, value: string): void {
		switch (type) {
			case PARAMETER.Related:
				this.parameters.Related = new TextValue().setValue(value);
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
