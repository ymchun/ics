import { parseISO } from 'date-fns';
import { VCalendar } from '~/components/v-calendar';
import { PROPERTY } from '~/constant';
import { foldLine, getDateTimeStr } from '~/helper';
import { PropertyImpl } from '~/interfaces/property-impl';
import { Property } from '~/properties/property';

export class Created extends Property implements PropertyImpl<Date> {
	public type = PROPERTY.Created;
	public value!: Date;

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	public evaluate(calendar: VCalendar): void {
		// set value
		this.value = parseISO(this.token.value);
	}

	public toString(): string {
		return foldLine(`${this.type}:${getDateTimeStr(this.value)}`);
	}
}
