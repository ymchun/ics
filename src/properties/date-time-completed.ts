import { parseISO } from 'date-fns';
import { VCalendar } from '~/components/v-calendar';
import { PROPERTY } from '~/constant';
import { Property } from '~/properties/property';

export class DateTimeCompleted extends Property {
	public type = PROPERTY.Completed;
	public value!: Date;

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	public evaluate(calendar: VCalendar): void {
		// set value
		this.value = parseISO(this.token.value);
	}

}
