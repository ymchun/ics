import { VCalendar } from '~/components/v-calendar';
import { PROPERTY } from '~/constant';
import { Property } from '~/properties/property';

export class PercentComplete extends Property {
	public type = PROPERTY.PercentComplete;
	public value!: number;

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	public evaluate(calendar: VCalendar): void {
		// set value
		this.value = parseInt(this.token.value, 10);
	}

}
