import { VALUE_DATA_TYPE } from '~/constant';
import { Value } from '~/values/value';

export class Float extends Value {
	public type = VALUE_DATA_TYPE.Float;
	public value!: number;
}
