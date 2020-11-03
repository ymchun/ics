import { VCalendar } from '~/components/v-calendar';
import { PROPERTY } from '~/constant';
import { foldLine } from '~/helper';
import { PropertyImpl } from '~/interfaces/property-impl';
import { Property } from '~/properties/property';
import { Recurrence } from '~/values/recurrence';

export class RRule extends Property implements PropertyImpl<Recurrence> {
	public type = PROPERTY.RRule;
	public value!: Recurrence;

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	public evaluate(calendar: VCalendar): void {
		// set value
		this.value = new Recurrence().setValue(this.token.value);
	}

	public toString(): string {
		return foldLine(`${this.type}:${this.value.toString()}`);
	}
}
