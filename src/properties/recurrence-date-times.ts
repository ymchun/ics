import { zonedTimeToUtc } from 'date-fns-tz';
import { VCalendar } from '~/components/v-calendar';
import { PARAMETER, PROPERTY, VALUE_DATA_TYPE } from '~/constant';
import { getDateRangeFromPeriod, getTimezoneOffset } from '~/helper';
import { PropertyImpl } from '~/interfaces/property-impl';
import { Property } from '~/properties/property';

export class RecurrenceDateTimes extends Property implements PropertyImpl<Array<[Date, Date]>> {
	public type = PROPERTY.RDate;
	public value!: Array<[Date, Date]>;
	public parameters = {
		TZID: null as string | null,
		Value: null as string | null,
	};

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	public evaluate(calendar: VCalendar): void {
		// set parameters
		if (this.token.parameters) {
			this.token.parameters.map((param) => {
				switch (param.name) {
					case PARAMETER.TZID:
						this.parameters.TZID = param.value;
						break;
					case PARAMETER.Value:
						this.parameters.Value = param.value;
						break;
				}
			});
		}
		// set value
		this.value = this.token.value.split(',').map((v) => {
			if (this.parameters.Value === VALUE_DATA_TYPE.Period) {
				return getDateRangeFromPeriod(v);
			} else {
				const date = zonedTimeToUtc(v, getTimezoneOffset(calendar, this.parameters.TZID));
				return [date, date];
			}
		});
	}
}
