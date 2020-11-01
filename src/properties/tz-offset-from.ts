import { VCalendar } from '~/components/v-calendar';
import { PROPERTY } from '~/constant';
import { foldLine } from '~/helper';
import { PropertyImpl } from '~/interfaces/property-impl';
import { Property } from '~/properties/property';

export class TZOffsetFrom extends Property implements PropertyImpl<string> {
	public type = PROPERTY.TZOffsetFrom;
	public value!: string;

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	public evaluate(calendar: VCalendar): void {
		// set value
		this.value = this.token.value;
	}

	public toString(): string {
		return foldLine(`${this.type}:${this.value}`);
	}
}
