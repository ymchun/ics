import { Component } from '~/components/component';
import { CreateComponentOptions } from '~/interfaces/create-component-options';
import { Property } from '~/properties/property';

export interface BuilderFunctionImpl<T> {
	type: string;
	build(target: Component | Property, opts: CreateComponentOptions): T;
}

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
