import { VALUE_DATA_TYPE } from '~/constant';
import { Value } from '~/values/value';

export class Time extends Value {
	public type = VALUE_DATA_TYPE.Time;
	public value!: Date;
}
