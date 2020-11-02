import { VALUE_DATA_TYPE } from '~/constant';
import { Value } from '~/values/value';

export class URI extends Value {
	public type = VALUE_DATA_TYPE.URI;
	public value!: string;
}
