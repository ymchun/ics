import { format } from 'date-fns';
import * as fs from 'fs';
import { Builder } from '~/builder';
import { VALUE_DATA_TYPE } from '~/constant';
import { convertToIcs } from '~/helper';
import { CreateVEventOptions } from '~/interfaces/create-component-options';
import { Parser } from '~/parser';

// parse & convert to ics

const ics = fs.readFileSync(process.argv[2]).toString('utf-8');
const [calendar] = new Parser().parse(ics);

fs.writeFileSync('./parsing_result.json', JSON.stringify(calendar));
fs.writeFileSync('./parsing_convert_result.ics', convertToIcs(calendar.getICSTokens()));

// build calendar

const builder = new Builder();
const calendarComponent = builder.createComponent({
	type: 'VCALENDAR',
	calScale: 'GREGORIAN',
	extWRCalDesc: 'Calendar description',
	extWRCalName: 'build calendar sample',
	extWRTimezone: 'Asia/Hong_Kong',
	method: 'PUBLISH',
	productId: '-//@ymchun/ics//EN',
	version: '2.0',
});

const events: CreateVEventOptions[] = [
	{
		type: 'VEVENT',
		summary: 'test event 1',
		dtStart: new Date().toISOString(),
		dtEnd: new Date().toISOString(),
	},
	{
		type: 'VEVENT',
		summary: 'test event 2',
		dtStart: {
			propertyValue: format(new Date(), 'yyyy-MM-dd'),
			Value: VALUE_DATA_TYPE.Date,
		},
		dtEnd: {
			propertyValue: format(new Date(), 'yyyy-MM-dd'),
			Value: VALUE_DATA_TYPE.Date,
		},
	},
	{
		type: 'VEVENT',
		summary: 'test event 3',
		dtStart: new Date().toISOString(),
		dtEnd: new Date().toISOString(),
	},
	{
		type: 'VEVENT',
		summary: 'test event 4',
		dtStart: new Date().toISOString(),
		dtEnd: new Date().toISOString(),
	},
];

if (calendarComponent) {
	events.map((event) => {
		const eventComponent = builder.createComponent(event);
		if (eventComponent) {
			calendarComponent.setComponent(eventComponent);
		}
	});
	fs.writeFileSync('./build_result.json', JSON.stringify(calendarComponent));
	fs.writeFileSync('./build_convert_result.ics', convertToIcs(calendarComponent.getICSTokens()));
}
