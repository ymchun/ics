import { VCalendar } from '~/components/v-calendar';
import { PROPERTY } from '~/constant';
import { PropertyImpl } from '~/interfaces/property-impl';
import { Property } from '~/properties/property';

export class TimeTransparency extends Property implements PropertyImpl<string> {
	public type = PROPERTY.Transp;
	public value!: string;

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	public evaluate(calendar: VCalendar): void {
		// set value
		this.value = this.token.value;
	}
}
