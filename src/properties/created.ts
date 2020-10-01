import { parseISO } from 'date-fns';
import { VCalendar } from '~/components/v-calendar';
import { PROPERTY } from '~/constant';
import { Property } from '~/properties/property';

export class Created extends Property {
	public type = PROPERTY.Created;
	public value!: Date;

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	public evaluate(calendar: VCalendar): void {
		// set value
		this.value = parseISO(this.token.value);
	}

}
