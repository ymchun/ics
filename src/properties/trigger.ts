import { PARAMETER, PROPERTY, TEST_PERIOD_TYPE } from '~/constant';
import { foldLine } from '~/helper';
import { PropertyImpl } from '~/interfaces/impl';
import { propertyParameterToString } from '~/internal-helper';
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

	public setValue(value: string): this {
		// set value
		if (TEST_PERIOD_TYPE.test(value)) {
			this.value = new DurationValue().setValue(value);
		} else {
			this.value = new DateTimeValue().setValue(value);
		}
		return this;
	}

	public setParameter(type: string, value: string): this {
		switch (type) {
			case PARAMETER.Related:
				this.parameters.Related = new TextValue().setValue(value);
				break;
			case PARAMETER.Value:
				this.parameters.Value = new TextValue().setValue(value);
				break;
		}
		return this;
	}

	public toString(): string {
		const paramStr = propertyParameterToString(this.parameters);
		return foldLine(`${this.type}${paramStr}:${this.value.toString()}`);
	}
}
