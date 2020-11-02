import { VALUE_DATA_TYPE } from '~/constant';
import { Value } from '~/values/value';

export class Integer extends Value {
	public type = VALUE_DATA_TYPE.Integer;
	public value!: number;
}
