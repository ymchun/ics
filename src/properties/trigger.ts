import { VCalendar } from '~/components/v-calendar';
import { PARAMETER, PROPERTY, TEST_PERIOD_TYPE } from '~/constant';
import { foldLine, propertyParameterToString } from '~/helper';
import { PropertyImpl } from '~/interfaces/property-impl';
import { Property } from '~/properties/property';
import { DateTime } from '~/values/date-time';
import { Duration } from '~/values/duration';
import { Text } from '~/values/text';

export class Trigger extends Property implements PropertyImpl<DateTime | Duration> {
	public type = PROPERTY.Trigger;
	public value!: DateTime | Duration;
	public parameters = {
		Related: null as Text | null,
		Value: null as Text | null,
	};

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	public evaluate(calendar: VCalendar): void {
		// set parameters
		if (this.token.parameters) {
			this.token.parameters.map((param) => {
				switch (param.name) {
					case PARAMETER.Related:
						this.parameters.Related = new Text().setValue(param.value);
						break;
					case PARAMETER.Value:
						this.parameters.Value = new Text().setValue(param.value);
						break;
				}
			});
		}
		// set value
		if (TEST_PERIOD_TYPE.test(this.token.value)) {
			this.value = new Duration().setValue(this.token.value);
		} else {
			this.value = new DateTime().setValue(this.token.value);
		}
	}

	public toString(): string {
		const paramStr = propertyParameterToString(this.parameters);
		return foldLine(`${this.type}${paramStr}:${this.value.toString()}`);
	}
}
