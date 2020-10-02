import * as fs from 'fs';
import { COMPONENT, KEYWORD, PROPERTY } from '~/constant';
import { Tokenizer } from '~/tokenizer';

describe('<tokenizer.ts>', () => {

	test('constructor without options', () => {
		const tokenizer = new Tokenizer();
		expect(tokenizer).not.toBeUndefined();
	});

	test('constructor with options', () => {
		const tokenizer = new Tokenizer({
			quiet: true,
		});
		expect(tokenizer).not.toBeUndefined();
	});

	test('tokenize', () => {
		const ics = fs.readFileSync('./tests/test1.ics').toString('utf-8');
		const tokens = Array.from(new Tokenizer().tokenize(ics));
		const expected = [
			{ name: KEYWORD.Begin, value: COMPONENT.Calendar },
			{ name: PROPERTY.Version, value: '2.0' },
			{ name: KEYWORD.Begin, value: COMPONENT.Timezone },
			{ name: PROPERTY.TZID, value: 'Asia/Hong_Kong' },
			{ name: KEYWORD.End, value: COMPONENT.Timezone },
			{ name: KEYWORD.End, value: COMPONENT.Calendar },
		];
		for (let i = 0; i < tokens.length; i++) {
			expect(tokens[i]).toMatchObject(expected[i]);
		}
	});

});
