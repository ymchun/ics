import { ConvertToICS } from '~/interfaces/convert-to-ics';
import { Property } from '~/properties/property';

export class Component {
	public type!: string;

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	public setComponent(component: Component): this {
		throw Error('Not implemented');
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	public setProperty(property: Property): this {
		throw Error('Not implemented');
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	public getICSTokens(): ConvertToICS {
		throw Error('Not implemented');
	}
}
