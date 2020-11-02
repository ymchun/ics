import { VALUE_DATA_TYPE } from '~/constant';
import { Value } from '~/values/value';

export class Binary extends Value {
	public type = VALUE_DATA_TYPE.Binary;
	public value!: string;
}
