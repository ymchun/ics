import { VCalendar } from '~/components/v-calendar';
import { PROPERTY } from '~/constant';
import { foldLine } from '~/helper';
import { PropertyImpl } from '~/interfaces/impl';
import { Property } from '~/properties/property';
import { RecurrenceValue } from '~/values/recurrence';

export class RRule extends Property implements PropertyImpl<RecurrenceValue> {
	public type = PROPERTY.RRule;
	public value!: RecurrenceValue;

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	public evaluate(calendar: VCalendar): void {
		// set value
		this.value = new RecurrenceValue().setValue(this.token.value);
	}

	public toString(): string {
		return foldLine(`${this.type}:${this.value.toString()}`);
	}
}
