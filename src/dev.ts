import * as fs from 'fs';
import { Parser } from '~/parser';

const ics = fs.readFileSync(process.argv[2]).toString('utf-8');
const [calendar] = new Parser().parse(ics);

fs.writeFileSync('./result.json', JSON.stringify(calendar));
fs.writeFileSync('./result.ics', calendar.toString());
