import { VCalendar } from '~/components/v-calendar';
import { PROPERTY } from '~/constant';
import { PropertyImpl } from '~/interfaces/property-impl';
import { Property } from '~/properties/property';

export class GeographicPosition extends Property implements PropertyImpl<[number, number]> {
	public type = PROPERTY.Geo;
	public value!: [number, number]; // [ lat, long ]

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	public evaluate(calendar: VCalendar): void {
		// set value
		const [latitude, longitude] = this.token.value.split(';');
		this.value = [parseFloat(latitude), parseFloat(longitude)];
	}
}
