import { VCalendar } from '~/components/v-calendar';
import { PROPERTY } from '~/constant';
import { Property } from '~/properties/property';

export class GeographicPosition extends Property {
	public type = PROPERTY.Geo;
	public latitude!: number;
	public longitude!: number;

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	public evaluate(calendar: VCalendar): void {
		// set value
		const [ latitude, longitude ] = this.token.value.split(';');
		this.latitude = parseFloat(latitude);
		this.longitude = parseFloat(longitude);
	}

}
