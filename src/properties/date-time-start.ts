import { parseISO } from 'date-fns';
import { zonedTimeToUtc } from 'date-fns-tz';
import { VCalendar } from '~/components/v-calendar';
import { PARAMETER, PROPERTY } from '~/constant';
import { getTimezoneOffset } from '~/helper';
import { Property } from '~/properties/property';

export class DateTimeStart extends Property {
	public type = PROPERTY.DTStart;
	public value!: Date;
	public parameters = {
		TZID: null as string | null,
		Value: null as string | null,
	};

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	public evaluate(calendar: VCalendar): void {
		// set value
		this.value = this.parameters.TZID
			? zonedTimeToUtc(this.token.value, getTimezoneOffset(calendar, this.parameters.TZID))
			: parseISO(this.token.value);
		// set parameters
		if (this.token.parameters) {
			this.token.parameters.map((param) => {
				switch (param.name) {
				case PARAMETER.TZID: this.parameters.TZID = param.value; break;
				case PARAMETER.Value: this.parameters.Value = param.value; break;
				}
			});
		}
	}

}
