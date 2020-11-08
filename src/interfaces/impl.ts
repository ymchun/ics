import { Component } from '~/components/component';
import { Property } from '~/properties/property';

export interface ComponentImpl {
	type: string;
	setComponent?(component: Component): this;
	setProperty?(property: Property): this;
	toString(): string;
}

export interface PropertyImpl<T> {
	type: string;
	value: T;
	setParameter(type: string, value: string): this;
	setValue(value: string): this;
	toString(): string;
}
