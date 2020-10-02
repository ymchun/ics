import * as fs from 'fs';
import { Parser } from '~/parser';

const ics = fs.readFileSync(process.argv[2]).toString('utf-8');
const calendars = new Parser().parse(ics);

console.log(JSON.stringify(calendars));
