import { VALUE_DATA_TYPE } from '~/constant';
import { UTCOffsetTime } from '~/interfaces/utc-offset-time';
import { Value } from '~/values/value';

export class UTCOffset extends Value {
	public type = VALUE_DATA_TYPE.UTCOffset;
	public value!: UTCOffsetTime;
}
