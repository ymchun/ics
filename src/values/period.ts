import { isValid, parseISO } from 'date-fns';
import { TEST_PERIOD_TYPE, VALUE_DATA_TYPE } from '~/constant';
import { formatDateTime } from '~/helper';
import { PeriodTime } from '~/interfaces/period-time';
import { Duration } from '~/values/duration';
import { Value } from '~/values/value';

export class Period extends Value<PeriodTime> {
	public type = VALUE_DATA_TYPE.Period;
	private value!: PeriodTime;

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
					duration: new Duration().setValue(second),
				};
			}
		}
		return this;
	}

	public toString(): string {
		switch (this.value.type) {
			case 'explicit':
				// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
				return `${formatDateTime(this.value.start)}/${formatDateTime(this.value.end!)}`;
			case 'start':
				// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
				return `${formatDateTime(this.value.start)}/${this.value.duration!.toString()}`;
		}
	}
}
