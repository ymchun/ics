import { DurationTime } from '~/interfaces/duration-time';

export interface PeriodTime {
	type: 'explicit' | 'start';
	start: string;
	end?: string;
	duration?: DurationTime;
}
