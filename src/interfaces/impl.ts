import { Component } from '~/components/component';
import { VCalendar } from '~/components/v-calendar';
import { Property } from '~/properties/property';

export interface ComponentImpl {
	type: string;
	setComponent?(component: Component): void;
	setProperty?(property: Property): void;
	toString(): string;
}

export interface PropertyImpl<T> {
	type: string;
	value: T;
	evaluate(calendar: VCalendar): void;
	toString(): string;
}
