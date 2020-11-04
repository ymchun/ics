import * as fs from 'fs';
import { convertToIcs } from '~/helper';
import { Parser } from '~/parser';

const ics = fs.readFileSync(process.argv[2]).toString('utf-8');
const [calendar] = new Parser().parse(ics);

fs.writeFileSync('./result.json', JSON.stringify(calendar));
fs.writeFileSync('./result.ics', convertToIcs(calendar.getICSTokens()));
