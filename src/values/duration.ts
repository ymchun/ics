import { TEST_PERIOD_TYPE, VALUE_DATA_TYPE } from '~/constant';
import { DurationTime } from '~/interfaces/duration-time';
import { Value } from '~/values/value';

export class DurationValue extends Value<DurationTime> {
	public type = VALUE_DATA_TYPE.Duration;
	private value!: DurationTime;

	public getValue(): DurationTime {
		return this.value;
	}

	public setValue(value: string): this {
		const matches = TEST_PERIOD_TYPE.exec(value);
		this.value = {
			sign: matches && matches[1] ? (matches[1] as DurationTime['sign']) : '+',
			weeks: matches && matches[2] ? parseInt(matches[2], 10) : 0,
			days: matches && matches[3] ? parseInt(matches[3], 10) : 0,
			hours: matches && matches[5] ? parseInt(matches[5], 10) : 0,
			minutes: matches && matches[6] ? parseInt(matches[6], 10) : 0,
			seconds: matches && matches[7] ? parseInt(matches[7], 10) : 0,
		};
		return this;
	}

	public toString(): string {
		const result = [`${this.value.sign}P`];

		if (this.value.weeks > 0) {
			result.push(`${this.value.weeks}W`);
		}
		if (this.value.days > 0) {
			result.push(`${this.value.days}D`);
		}
		if (this.value.hours > 0) {
			result.push(`${this.value.hours}H`);
		}
		if (this.value.minutes > 0) {
			result.push(`${this.value.minutes}M`);
		}
		if (this.value.seconds > 0) {
			result.push(`${this.value.seconds}S`);
		}
		return result.join('');
	}
}
