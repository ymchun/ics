import { zonedTimeToUtc } from 'date-fns-tz';
import { VCalendar } from '~/components/v-calendar';
import { PARAMETER, PROPERTY } from '~/constant';
import { getTimezoneOffset } from '~/helper';
import { Property } from '~/properties/property';

export class RecurrenceId extends Property {
	public type = PROPERTY.RecurrenceId;
	public value!: Date;
	public parameters = {
		Range: null as string | null,
		TZID: null as string | null,
		Value: null as string | null,
	};

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	public evaluate(calendar: VCalendar): void {
		// set value
		this.value = zonedTimeToUtc(this.token.value, getTimezoneOffset(calendar, this.parameters.TZID));
		// set parameters
		if (this.token.parameters) {
			this.token.parameters.map((param) => {
				switch (param.name) {
				case PARAMETER.Range: this.parameters.Range = param.value; break;
				case PARAMETER.TZID: this.parameters.TZID = param.value; break;
				case PARAMETER.Value: this.parameters.Value = param.value; break;
				}
			});
		}
	}

}
