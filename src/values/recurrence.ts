import { VALUE_DATA_TYPE } from '~/constant';
import { Value } from '~/values/value';

export class Recurrence extends Value {
	public type = VALUE_DATA_TYPE.Recur;
	public value!: string;
}
