import { Component } from '~/components/component';
import { Property } from '~/properties/property';

export interface ComponentImpl {
	type: string;
	setComponent?(component: Component): void;
	setProperty?(property: Property): void;
	toString(): string;
}
