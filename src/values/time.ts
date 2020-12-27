import { parseISO } from 'date-fns';
import { utcToZonedTime, zonedTimeToUtc } from 'date-fns-tz';
import { VALUE_DATA_TYPE } from '~/constant';
import { formatTime } from '~/helper';
import { Value } from '~/values/value';

export class TimeValue extends Value<Date> {
	public type = VALUE_DATA_TYPE.Time;
	private value!: Date;
	private tz!: string;

	public getValue(): Date {
		return this.value;
	}

	public setValue(value: string): this {
		this.value = parseISO(`19700101T${value}`);
		return this;
	}

	public convertFromTZ(tz: string): this {
		this.value = zonedTimeToUtc(this.value, tz);
		this.tz = tz;
		return this;
	}

	public toString(): string {
		const value = this.tz ? utcToZonedTime(this.value, this.tz) : this.value;
		return formatTime(value, !!this.tz);
	}
}
