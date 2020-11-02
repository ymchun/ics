import { VALUE_DATA_TYPE } from '~/constant';
import { Value } from '~/values/value';

export class CalAddress extends Value {
	public type = VALUE_DATA_TYPE.CalAddress;
	public value!: string;
}
