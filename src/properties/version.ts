import { VCalendar } from '~/components/v-calendar';
import { PROPERTY } from '~/constant';
import { foldLine } from '~/helper';
import { PropertyImpl } from '~/interfaces/impl';
import { Property } from '~/properties/property';
import { TextValue } from '~/values/text';

export class Version extends Property implements PropertyImpl<TextValue> {
	public type = PROPERTY.Version;
	public value!: TextValue;

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	public evaluate(calendar: VCalendar): void {
		// set value
		this.value = new TextValue().setValue(this.token.value);
	}

	public toString(): string {
		return foldLine(`${this.type}:${this.value.toString()}`);
	}
}
