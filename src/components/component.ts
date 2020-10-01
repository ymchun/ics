import { Property } from '~/properties/property';

export class Component {
	public type!: string;

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	public setComponent(component: Component): void {
		console.warn('Not implemented');
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	public setProperty(property: Property): void {
		console.warn('Not implemented');
	}

}
