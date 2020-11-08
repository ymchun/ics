import { PROPERTY } from '~/constant';
import { foldLine } from '~/helper';
import { PropertyImpl } from '~/interfaces/impl';
import { Property } from '~/properties/property';
import { URIValue } from '~/values/uri';

export class Url extends Property implements PropertyImpl<URIValue> {
	public type = PROPERTY.Url;
	public value!: URIValue;

	public setValue(value: string): this {
		// set value
		this.value = new URIValue().setValue(value);
		return this;
	}

	public toString(): string {
		return foldLine(`${this.type}:${this.value.toString()}`);
	}
}
