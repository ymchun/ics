import { VCalendar } from '~/components/v-calendar';

export interface PropertyImpl<T> {
	type: string;
	value: T;
	evaluate(calendar: VCalendar): void;
}
