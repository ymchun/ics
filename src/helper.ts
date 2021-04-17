import { format } from 'date-fns';
import { Component } from '~/components/component';
import { VCalendar } from '~/components/v-calendar';
import { ICS_LINE_BREAK, KEYWORD, REGEX_FOLD_LINE_BREAK } from '~/constant';
import { ConvertToICS } from '~/interfaces/convert-to-ics';
import { KeyMap } from '~/interfaces/global';
import { DateTimeEnd } from '~/properties/date-time-end';
import { DateTimeStart } from '~/properties/date-time-start';
import { ExceptionDateTimes } from '~/properties/exception-date-times';
import { RecurrenceDateTimes } from '~/properties/recurrence-date-times';
import { RecurrenceId } from '~/properties/recurrence-id';
import { DateTimeValue } from '~/values/date-time';
import { PeriodValue } from '~/values/period';
import { TimeValue } from '~/values/time';

export function foldLine(line = ''): string {
	const length = 72;
	const chunks = Math.ceil(line.length / length);
	return new Array<string>(chunks)
		.fill('')
		.map((_, index) => line.substr(index * length, length))
		.join('\r\n ');
}

export function unfoldLine(line = ''): string {
	return line.split(REGEX_FOLD_LINE_BREAK).join('');
}

export function escape(str: string): string {
	return str.split('\\').join('\\\\').split(';').join('\\;').split(',').join('\\,').split('\n').join('\\n');
}

export function unescape(str: string): string {
	return str
		.split('\\\\')
		.join('\\')
		.split('\\;')
		.join(';')
		.split('\\,')
		.join(',')
		.split('\\N')
		.join('\n')
		.split('\\n')
		.join('\n');
}

export function filterEmptyLine(lines: string[]): string[] {
	return lines.filter((line) => `${line}`.trim() !== '');
}

export function quotedStr(str: string): string {
	return [';', ':', ','].some((char) => str.includes(char)) ? `"${str}"` : str;
}

export function formatDate(date: Date): string {
	return format(date, 'yyyyMMdd');
}

export function formatTime(date: Date, zoned = false): string {
	if (zoned) {
		// cspell:disable-next-line
		return format(date, "HHmmss'Z'");
	}
	// cspell:disable-next-line
	return format(date, 'HHmmss');
}

export function formatDateTime(date: Date, zoned = false): string {
	if (zoned) {
		// cspell:disable-next-line
		return format(date, "yyyyMMdd'T'HHmmss");
	}
	// cspell:disable-next-line
	return format(date, "yyyyMMdd'T'HHmmss'Z'");
}

export function convertToIcs(payload: ConvertToICS): string {
	// result array
	const lines: string[] = [];
	// push begin tag
	lines.push(`${KEYWORD.Begin}:${payload.type}`);
	// push children
	payload.children.map((children) => {
		if (typeof children === 'string') {
			lines.push(children);
		} else {
			lines.push(convertToIcs(children));
		}
	});
	// push end tag
	lines.push(`${KEYWORD.End}:${payload.type}`);
	// concat string
	return lines.join(ICS_LINE_BREAK);
}

export function getCalendarTimezone(calendar: VCalendar): string {
	if (calendar?.extWRTimezone) {
		if (calendar?.extWRTimezone?.value?.getValue()) {
			return calendar.extWRTimezone.value.getValue();
		}
	}
	if (calendar?.timezones?.length > 0) {
		const timezone = calendar.timezones.find((tz) => tz.TZID.value !== null);
		if (timezone?.standard?.tzOffsetTo?.value) {
			return timezone.standard.tzOffsetTo.value.toString();
		}
	}
	return 'UTC';
}

export function evaluateComponentTimezone(component: Component, tz: string): void {
	Object.getOwnPropertyNames(component).map((key) => {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any
		const target = (component as KeyMap<any>)[key];
		// unify properties
		const properties = Array.isArray(target) ? target : [target];

		for (const property of properties) {
			if (
				property instanceof DateTimeEnd ||
				property instanceof DateTimeStart ||
				property instanceof RecurrenceId
			) {
				if (
					property.value &&
					(
						property.value instanceof DateTimeValue ||
						property.value instanceof TimeValue
					)
				) {
					property.value.convertFromTZ(tz);
				}
			}
			else if (property instanceof ExceptionDateTimes) {
				if (property.value) {
					property.value.map((v) => {
						if (v instanceof DateTimeValue || v instanceof TimeValue) {
							v.convertFromTZ(tz);
						}
					});
				}
			}
			else if (property instanceof RecurrenceDateTimes) {
				if (property.value) {
					property.value.map((v) => {
						if (
							v instanceof DateTimeValue ||
							v instanceof PeriodValue ||
							v instanceof TimeValue
						) {
							v.convertFromTZ(tz);
						}
					});
				}
			}
		}
	});
}
