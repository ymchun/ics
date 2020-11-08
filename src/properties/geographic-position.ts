import { PROPERTY } from '~/constant';
import { foldLine } from '~/helper';
import { PropertyImpl } from '~/interfaces/impl';
import { Property } from '~/properties/property';
import { FloatValue } from '~/values/float';

export class GeographicPosition extends Property implements PropertyImpl<[FloatValue, FloatValue]> {
	public type = PROPERTY.Geo;
	public value!: [FloatValue, FloatValue]; // [ lat, long ]

	public setValue(value: string): this {
		// set value
		const [latitude, longitude] = value.split(';');
		this.value = [new FloatValue().setValue(latitude), new FloatValue().setValue(longitude)];
		return this;
	}

	public toString(): string {
		return foldLine(`${this.type}:${this.value[0].toString()};${this.value[1].toString()}`);
	}
}
