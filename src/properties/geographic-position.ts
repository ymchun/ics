import { VCalendar } from '~/components/v-calendar';
import { PROPERTY } from '~/constant';
import { foldLine } from '~/helper';
import { PropertyImpl } from '~/interfaces/property-impl';
import { Property } from '~/properties/property';
import { Float } from '~/values/float';

export class GeographicPosition extends Property implements PropertyImpl<[Float, Float]> {
	public type = PROPERTY.Geo;
	public value!: [Float, Float]; // [ lat, long ]

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	public evaluate(calendar: VCalendar): void {
		// set value
		const [latitude, longitude] = this.token.value.split(';');
		this.value = [new Float().setValue(latitude), new Float().setValue(longitude)];
	}

	public toString(): string {
		return foldLine(`${this.type}:${this.value[0].toString()};${this.value[1].toString()}`);
	}
}
