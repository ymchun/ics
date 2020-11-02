import { VALUE_DATA_TYPE } from '~/constant';
import { DurationTime } from '~/interfaces/duration-time';
import { Value } from '~/values/value';

export class Duration extends Value {
	public type = VALUE_DATA_TYPE.Duration;
	public value!: DurationTime;
}
