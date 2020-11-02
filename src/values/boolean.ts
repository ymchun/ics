import { VALUE_DATA_TYPE } from '~/constant';
import { Value } from '~/values/value';

export class Boolean extends Value {
	public type = VALUE_DATA_TYPE.Boolean;
	public value!: boolean;
}
