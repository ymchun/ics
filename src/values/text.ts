import { VALUE_DATA_TYPE } from '~/constant';
import { Value } from '~/values/value';

export class Text extends Value {
	public type = VALUE_DATA_TYPE.Text;
	public value!: string;
}
