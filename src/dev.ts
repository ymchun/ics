import * as fs from 'fs';
import { Parser } from '~/parser';
import { Tokenizer } from '~/tokenizer';

const ics = fs.readFileSync(process.argv[2]).toString('utf-8');
const tokens = new Tokenizer().tokenize(ics);
const calendars = new Parser().parse(tokens);

console.log(JSON.stringify(calendars));
