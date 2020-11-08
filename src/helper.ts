import { format } from 'date-fns';
import { VCalendar } from '~/components/v-calendar';
import { ICS_LINE_BREAK, KEYWORD, PARAMETER, REGEX_FOLD_LINE_BREAK } from '~/constant';
import { ConvertToICS } from '~/interfaces/convert-to-ics';
import { KeyMap } from '~/interfaces/global';
import { Value } from '~/values/value';

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

export function formatTime(date: Date): string {
	return format(date, 'HHmmss');
}

export function formatDateTime(date: Date): string {
	return `${formatDate(date)}T${formatTime(date)}Z`;
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

export function getTimezoneOffset(calendar: VCalendar, TZID: string | null): string {
	if (calendar?.extWRTimezone) {
		if (calendar?.extWRTimezone?.token?.value) {
			return calendar.extWRTimezone.token.value;
		}
		if (calendar?.extWRTimezone?.value?.getValue()) {
			return calendar.extWRTimezone.value.getValue();
		}
	}
	if (calendar?.timezones?.length > 0) {
		const timezone = calendar.timezones.find(
			(tz) =>
				(tz.TZID.value !== null && tz.TZID.value.getValue() === TZID) ||
				(tz.TZID.token !== null && tz.TZID.token.value === TZID),
		);
		if (timezone?.standard?.tzOffsetTo?.value) {
			return timezone.standard.tzOffsetTo.value.toString();
		}
	}
	return 'UTC';
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function propertyParameterToString(parameters: KeyMap<Value<any>[] | Value<any> | null>): string {
	return Object.keys(parameters)
		.filter((key) => parameters[key] !== null)
		.map((key) => {
			const paramKey = (PARAMETER as KeyMap<string>)[key];
			const paramValue = (Array.isArray(parameters[key])
				? (parameters[key] as Value<any>[]).map((v) => v.toString()).join(',') // eslint-disable-line @typescript-eslint/no-explicit-any
				: parameters[key]?.toString()) as string;
			return `;${paramKey}=${quotedStr(paramValue)}`;
		})
		.join('');
}
