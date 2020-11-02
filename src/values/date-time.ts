import { VALUE_DATA_TYPE } from '~/constant';
import { Value } from '~/values/value';

export class DateTime extends Value {
	public type = VALUE_DATA_TYPE.DateTime;
	public value!: Date;
}
