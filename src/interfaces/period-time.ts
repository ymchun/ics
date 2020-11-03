import { DurationValue } from '~/values/duration';

export interface PeriodTime {
	type: 'explicit' | 'start';
	start: Date;
	end?: Date;
	duration?: DurationValue;
}
