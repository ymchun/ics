import { parseISO } from 'date-fns';
import { VALUE_DATA_TYPE } from '~/constant';
import { formatDateTime } from '~/helper';
import { Value } from '~/values/value';

export class DateTime extends Value<Date> {
	public type = VALUE_DATA_TYPE.DateTime;
	private value!: Date;

	public getValue(): Date {
		return this.value;
	}

	public setValue(value: string): this {
		this.value = parseISO(value);
		return this;
	}

	public toString(): string {
		return formatDateTime(this.value);
	}
}
