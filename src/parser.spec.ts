import * as fs from 'fs';
import { VCalendar } from '~/components/v-calendar';
import { COMPONENT, KEYWORD, PROPERTY } from '~/constant';
import { Token } from '~/interfaces/token';
import { Iterable } from '~/iterable';
import { Parser } from '~/parser';
import { Attachment } from '~/properties/attachment';

describe('<parser.ts>', () => {
	test('constructor without options', () => {
		const parser = new Parser();
		expect(parser).not.toBeUndefined();
	});

	test('constructor with options', () => {
		const parser = new Parser({
			components: {
				test_component: VCalendar,
			},
			properties: {
				test_property: Attachment,
			},
		});
		expect(parser).not.toBeUndefined();
	});

	test('parse', () => {
		const ics = fs.readFileSync('./tests/test1.ics').toString('utf-8');
		const calendars = new Parser().parse(ics);

		expect(calendars).not.toBeUndefined();
		expect(calendars.length).toBe(1);
		expect(calendars[0].type).toBe(COMPONENT.Calendar);
		expect(calendars[0].version).toBeTruthy();
		expect(calendars[0].version.value).toBe('2.0');
		expect(calendars[0].timezones).toBeTruthy();
		expect(calendars[0].timezones[0].TZID).toBeTruthy();
		expect(calendars[0].timezones[0].TZID.value).toBe('Asia/Hong_Kong');
	});

	test('parseTokens', () => {
		const calendars = new Parser().parseTokens(
			new Iterable<Token>([
				{ name: KEYWORD.Begin, value: COMPONENT.Calendar },
				{ name: PROPERTY.Version, value: '2.0' },
				{ name: KEYWORD.Begin, value: COMPONENT.Timezone },
				{ name: PROPERTY.TZID, value: 'Asia/Hong_Kong' },
				{ name: KEYWORD.End, value: COMPONENT.Timezone },
				{ name: KEYWORD.End, value: COMPONENT.Calendar },
			]),
		);
		expect(calendars).not.toBeUndefined();
		expect(calendars.length).toBe(1);
		expect(calendars[0].type).toBe(COMPONENT.Calendar);
		expect(calendars[0].version).toBeTruthy();
		expect(calendars[0].version.value).toBe('2.0');
		expect(calendars[0].timezones).toBeTruthy();
		expect(calendars[0].timezones[0].TZID).toBeTruthy();
		expect(calendars[0].timezones[0].TZID.value).toBe('Asia/Hong_Kong');
	});
});
