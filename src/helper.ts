import { addDays, addHours, addMinutes, addSeconds, addWeeks, isValid, parseISO } from 'date-fns';
import { VCalendar } from '~/components/v-calendar';
import { FOLD_LINE_BREAK, TEST_PERIOD_TYPE } from '~/constant';
import { Duration } from '~/interfaces/duration';

export function foldLine(line = ''): string {
	const chunks = Math.ceil(line.length / 75);
	return new Array<string>(chunks).fill('')
		.map((_, index) => line.substr(index * 75, 75))
		.join('\r\n ');
}

export function unfoldLine(line = ''): string {
	return line.split(FOLD_LINE_BREAK).join('');
}

export function filterEmptyLine(lines: string[]): string[] {
	return lines.filter((line) => `${line}`.trim() !== '');
}

export function handleCalAddress(value: string): string {
	return value.replace('mailto:', '');
}

export function isPeriod(value: string): boolean {
	const [ first, second ] = value.split('/');
	if (first === undefined || second === undefined) {
		return false;
	}
	if (!isValid(parseISO(first))) {
		return false;
	}
	if (!isValid(parseISO(second)) && !isDuration(second)) {
		return  false;
	}
	return true;
}

export function isDuration(value: string): boolean {
	return TEST_PERIOD_TYPE.test(value);
}

export function parseDuration(value: string): Duration {
	const matches = TEST_PERIOD_TYPE.exec(value);
	return {
		weeks: matches && matches[2] ? parseInt(matches[2], 10) : 0,
		days: matches && matches[3] ? parseInt(matches[3], 10) : 0,
		hours: matches && matches[5] ? parseInt(matches[5], 10) : 0,
		minutes: matches && matches[6] ? parseInt(matches[6], 10) : 0,
		seconds: matches && matches[7] ? parseInt(matches[7], 10) : 0,
	};
}

export function getDateFromDuration(start: Date, duration: Duration): Date {
	let result = new Date(start);
	if (duration.weeks > 0) {
		result = addWeeks(result, duration.weeks);
	}
	if (duration.days > 0) {
		result = addDays(result, duration.days);
	}
	if (duration.hours > 0) {
		result = addHours(result, duration.hours);
	}
	if (duration.minutes > 0) {
		result = addMinutes(result, duration.minutes);
	}
	if (duration.seconds > 0) {
		result = addSeconds(result, duration.seconds);
	}
	return result;
}

export function getDateRangeFromPeriod(period: string): [ Date, Date ] {
	const [ first, second ] = period.split('/');
	const start = parseISO(first);
	const end = isDuration(second)
		? getDateFromDuration(start, parseDuration(second))
		: parseISO(second);
	return [ start, end ];
}

export function getTimezoneOffset(calendar: VCalendar, TZID: string | null): string {
	if (calendar?.extWRTimezone) {
		if (calendar?.extWRTimezone?.token?.value) {
			return calendar.extWRTimezone.token.value;
		}
		if (calendar?.extWRTimezone?.value) {
			return calendar.extWRTimezone.value;
		}
	}
	if (calendar?.timezones?.length > 0) {
		const timezone = calendar.timezones.find((tz) => (
			tz.TZID.value !== null &&
			tz.TZID.value === TZID ||
			tz.TZID.token !== null &&
			tz.TZID.token.value === TZID
		));
		if (timezone?.standard?.tzOffsetTo?.value) {
			return timezone.standard.tzOffsetTo.value;
		}
	}
	return 'UTC';
}
