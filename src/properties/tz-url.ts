import { VCalendar } from '~/components/v-calendar';
import { PROPERTY } from '~/constant';
import { foldLine } from '~/helper';
import { PropertyImpl } from '~/interfaces/impl';
import { Property } from '~/properties/property';
import { URIValue } from '~/values/uri';

export class TZUrl extends Property implements PropertyImpl<URIValue> {
	public type = PROPERTY.TZUrl;
	public value!: URIValue;

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	public evaluate(calendar: VCalendar): void {
		// set value
		this.value = new URIValue().setValue(this.token.value);
	}

	public toString(): string {
		return foldLine(`${this.type}:${this.value.toString()}`);
	}
}
