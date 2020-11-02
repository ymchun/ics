import { VALUE_DATA_TYPE } from '~/constant';
import { Value } from '~/values/value';

export class Date extends Value {
	public type = VALUE_DATA_TYPE.Date;
	public value!: Date;
}
