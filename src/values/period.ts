import { VALUE_DATA_TYPE } from '~/constant';
import { PeriodTime } from '~/interfaces/period-time';
import { Value } from '~/values/value';

export class Period extends Value {
	public type = VALUE_DATA_TYPE.Period;
	public value!: PeriodTime;
}
