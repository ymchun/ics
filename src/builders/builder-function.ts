import { Component } from '~/components/component';
import { CreateComponentOptions } from '~/interfaces/create-component-options';
import { PropertyFactory } from '~/properties/property-factory';

export class BuilderFunction {
	public type!: string;
	protected propertyFactory!: PropertyFactory;

	public constructor(propertyFactory: PropertyFactory) {
		this.propertyFactory = propertyFactory;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
	public build(target: Component, opts: CreateComponentOptions): any {
		throw Error('Not implemented');
	}
}
