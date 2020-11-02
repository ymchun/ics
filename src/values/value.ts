import { VCalendar } from '~/components/v-calendar';

export class Value {
	public type!: string;

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	public evaluate(calendar: VCalendar): void {
		throw Error('Not implemented');
	}

	public toString(): string {
		throw Error('Not implemented');
	}
}
