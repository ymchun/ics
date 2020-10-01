import { VCalendar } from '~/components/v-calendar';
import { Token } from '~/interfaces/token';

export class Property {
	public type!: string;
	public token!: Token;

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	public evaluate(calendar: VCalendar): void {
		console.warn('Not implemented');
	}

}
