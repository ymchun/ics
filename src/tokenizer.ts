import * as nearley from 'nearley';
import { ICS_LINE_BREAK } from '~/constant';
import { filterEmptyLine, unfoldLine } from '~/helper';
import { Token } from '~/interfaces/token';
import { Iterable } from '~/iterable';
import * as grammar from '~/nearley/grammar';

export class Tokenizer {
	// split ics file content into tokens
	public tokenize(ics: string): Iterable<Token> {
		return new Iterable(
			filterEmptyLine(unfoldLine(ics).split(ICS_LINE_BREAK))
				.map((line) => {
					const results = new nearley.Parser(nearley.Grammar.fromCompiled(grammar))
						.feed(line)
						.results as Token[];
					if (results.length !== 1) {
						console.warn(`Unexpected parsing result length: ${results.length}`, results);
					}
					return results;
				})
				.reduce(
					(results, tokens) => [
						...results,
						...tokens,
					],
					[] as Token[],
				),
		);
	}

}
