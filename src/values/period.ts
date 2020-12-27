import { isValid, parseISO } from 'date-fns';
import { utcToZonedTime, zonedTimeToUtc } from 'date-fns-tz';
import { TEST_PERIOD_TYPE, VALUE_DATA_TYPE } from '~/constant';
import { formatDateTime } from '~/helper';
import { PeriodTime } from '~/interfaces/period-time';
import { DurationValue } from '~/values/duration';
import { Value } from '~/values/value';

export class PeriodValue extends Value<PeriodTime> {
	public type = VALUE_DATA_TYPE.Period;
	private value!: PeriodTime;
	private tz!: string;

	public getValue(): PeriodTime {
		return this.value;
	}

	public setValue(value: string): this {
		const [first, second] = value.split('/');
		const firstDate = parseISO(first);

		if (isValid(firstDate)) {
			const secondDate = parseISO(second);

			if (isValid(secondDate)) {
				this.value = {
					type: 'explicit',
					start: firstDate,
					end: secondDate,
				};
			} else if (TEST_PERIOD_TYPE.test(second)) {
				this.value = {
					type: 'start',
					start: firstDate,
					duration: new DurationValue().setValue(second),
				};
			}
		}
		return this;
	}

	public convertFromTZ(tz: string): this {
		switch (this.value.type) {
			case 'explicit':
				this.value.start = zonedTimeToUtc(this.value.start, tz);
				// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
				this.value.end = zonedTimeToUtc(this.value.end!, tz);
				break;
			case 'start':
				this.value.start = zonedTimeToUtc(this.value.start, tz);
				break;
		}
		this.tz = tz;
		return this;
	}

	public toString(): string {
		switch (this.value.type) {
			case 'explicit': {
				const startDateTime = this.tz ? utcToZonedTime(this.value.start, this.tz) : this.value.start;
				// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
				const endDateTime = this.tz ? utcToZonedTime(this.value.end!, this.tz) : this.value.end;
				// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
				return `${formatDateTime(startDateTime)}/${formatDateTime(endDateTime!)}`;
			}
			case 'start': {
				const startDateTime = this.tz ? utcToZonedTime(this.value.start, this.tz) : this.value.start;
				// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
				return `${formatDateTime(startDateTime)}/${this.value.duration!.toString()}`;
			}
		}
	}
}
