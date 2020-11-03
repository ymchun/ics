import { parseISO } from 'date-fns';
import { VALUE_DATA_TYPE } from '~/constant';
import { formatTime } from '~/helper';
import { Value } from '~/values/value';

export class TimeValue extends Value<Date> {
	public type = VALUE_DATA_TYPE.Time;
	private value!: Date;

	public getValue(): Date {
		return this.value;
	}

	public setValue(value: string): this {
		this.value = parseISO(value);
		return this;
	}

	public toString(): string {
		return formatTime(this.value);
	}
}
