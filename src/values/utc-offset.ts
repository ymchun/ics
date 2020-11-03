import { TEST_UTC_OFFSET_TYPE, VALUE_DATA_TYPE } from '~/constant';
import { UTCOffsetTime } from '~/interfaces/utc-offset-time';
import { Value } from '~/values/value';

export class UTCOffset extends Value<UTCOffsetTime> {
	public type = VALUE_DATA_TYPE.UTCOffset;
	private value!: UTCOffsetTime;

	public getValue(): UTCOffsetTime {
		return this.value;
	}

	public setValue(value: string): this {
		const matches = TEST_UTC_OFFSET_TYPE.exec(value);
		this.value = {
			sign: matches && matches[1] ? (matches[1] as UTCOffsetTime['sign']) : '+',
			hour: matches && matches[2] ? parseInt(matches[2], 10) : 0,
			minute: matches && matches[3] ? parseInt(matches[3], 10) : 0,
			second: matches && matches[4] ? parseInt(matches[4], 10) : 0,
		};
		return this;
	}

	public toString(): string {
		const result = [`${this.value.sign}`];

		if (this.value.hour < 10) {
			result.push(`0${this.value.hour}`);
		} else {
			result.push(`${this.value.hour}`);
		}

		if (this.value.minute < 10) {
			result.push(`0${this.value.minute}`);
		} else {
			result.push(`${this.value.minute}`);
		}

		if (this.value.second > 0) {
			if (this.value.second < 10) {
				result.push(`0${this.value.second}`);
			} else {
				result.push(`${this.value.second}`);
			}
		}
		return result.join('');
	}
}
