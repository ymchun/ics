import { VCalendar } from '~/components/v-calendar';
import { PROPERTY } from '~/constant';
import { foldLine } from '~/helper';
import { PropertyImpl } from '~/interfaces/property-impl';
import { Property } from '~/properties/property';

export class PercentComplete extends Property implements PropertyImpl<number> {
	public type = PROPERTY.PercentComplete;
	public value!: number;

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	public evaluate(calendar: VCalendar): void {
		// set value
		this.value = parseInt(this.token.value, 10);
	}

	public toString(): string {
		return foldLine(`${this.type}:${this.value.toFixed(0)}`);
	}
}
